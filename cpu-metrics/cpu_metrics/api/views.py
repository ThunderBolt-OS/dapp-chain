from rest_framework import serializers, status
from rest_framework.decorators import api_view  
from rest_framework.response import Response
from rest_framework.request import Request

import subprocess

from .models import *

import psutil

# ---------------------------------------------------------------------------------------------

@api_view(["GET"])
def hello_world(request: Request) -> Response:
    return Response({"message": "Hello, world!"})  

# ---------------------------------------------------------------------------------------------

@api_view(["GET"])
def cpu_metrics(request: Request) -> Response:
    # cpu temperature
    try:
        cpu_temperature = psutil.sensors_temperatures()['coretemp'][0].current
        print(f"Current CPU Temperature: {cpu_temperature} °C")
    except Exception as e:
        print(f"Error: {e}")
        cpu_temperature = None

    try: 
        ram_usage = psutil.virtual_memory().percent
        print(f"RAM Usage: {ram_usage}%")
    except Exception as e:
        print(f"Error: {e}")
        ram_usage = None
    
    try:
        cpu_fan_speed = psutil.sensors_fans()['coretemp'][0]
        print(f"CPU Fan Speed: {cpu_fan_speed} RPM")
    except Exception as e:
        print(f"Error: {e}")
        cpu_fan_speed = None
    
    json_response = {
        "cpu_temperature": cpu_temperature,
        "ram_usage": ram_usage,
        "cpu_fan_speed": cpu_fan_speed
    }

    return Response(json_response)

# ---------------------------------------------------------------------------------------------

class CPUTemperatureTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPUTemperatureTransaction
        fields = '__all__'

@api_view(["POST"])
def create_cpu_temperature_transaction(request: Request) -> Response:
    serializer = CPUTemperatureTransactionSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ---------------------------------------------------------------------------------------------

class CPUTemperatureTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPUTemperatureTransaction
        fields = '__all__'

@api_view(["GET"])
def get_recent_transactions(request: Request) -> Response:
    # get the most recent transaction ie the last transaction
    recent_transactions = CPUTemperatureTransaction.objects.all().order_by('-id')  
    # serialize the data
    serializer = CPUTemperatureTransactionSerializer(recent_transactions, many=True)
    return Response(serializer.data)

# ---------------------------------------------------------------------------------------------

class CPUTemperatureTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPUTemperatureTransaction
        fields = '__all__'

@api_view(["GET"])
def get_cputemp_blockdifficulty(request: Request) -> Response:
    # create a list of cpu_temperature row
    recent_transactions = CPUTemperatureTransaction.objects.all()
    cpu_temperature_list = [transaction.cpu_temperature for transaction in recent_transactions]
    block_difficulty_list = [transaction.block_difficulty for transaction in recent_transactions]
    created_at_list = [transaction.created_at for transaction in recent_transactions]

    json_response = {
        "cpu_temperature_arr" : cpu_temperature_list,
        "block_difficulty_arr": block_difficulty_list,
        "created_at_arr": created_at_list,
    }

    return Response(json_response)

# ---------------------------------------------------------------------------------------------

class LoadAlgorithmSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoadAlgorithm
        fields = '__all__'

@api_view(["POST"])
def load_algorithm(request: Request) -> Response:
    serializer = LoadAlgorithmSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        # return Response(serializer.data, status=status.HTTP_201_CREATED)

        try:
            algorithm_name = serializer.data['algorithm_name']
            difficulty_level = serializer.data['difficulty_level']
            print(f"Algorithm Name: {algorithm_name}")
            print(f"Difficulty Level: {difficulty_level}")
            # execute the algorithm
            # subprocess.run(["python", "algorithm.py", algorithm_name, difficulty_level])
            # subprocess.run(["python", "algorithm.py", algorithm_name, str(difficulty_level)])
            subprocess.run(["python", "algorithm.py", algorithm_name, str(difficulty_level)], shell=True)
        except Exception as e:
            print(f"Error: {e}")
            return Response({"message": "Error executing algorithm"}, status=status.HTTP_400_BAD_REQUEST)

    
    
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
