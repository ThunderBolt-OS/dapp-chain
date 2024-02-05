from rest_framework.decorators import api_view  
from rest_framework.response import Response
from rest_framework.request import Request

@api_view(["GET"])
def hello_world(request: Request) -> Response:
    return Response({"message": "Hello, world!"})  

@api_view(["GET"])
def cpu_metrics(request: Request) -> Response:
    return Response({"message": "CPU Metrics!"})