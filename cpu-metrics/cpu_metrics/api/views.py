from rest_framework import serializers, status
from rest_framework.decorators import api_view  
from rest_framework.response import Response
from rest_framework.request import Request

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
    
    json_response = {
        "cpu_temperature": cpu_temperature
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