import subprocess
import time
import psutil

def increase_cpu_temperature():
    try:
        # Run 'stress' command to put a load on the CPU
        subprocess.run(['stress', '--cpu', '4', '--timeout', '60s'])
        time.sleep(10)  # Sleep for 10 seconds to simulate increased CPU temperature
    except Exception as e:
        print(f"Error: {e}")

def get_cpu_temperature():
    try:
        # Run 'sensors' command to get sensor information
        result = subprocess.run(['sensors'], capture_output=True, text=True)
        
        # Extract CPU temperature from the output
        temperature_lines = [line for line in result.stdout.split('\n') if 'Core 0' in line]
        if temperature_lines:
            temperature_str = temperature_lines[0].split()[2]
            return float(temperature_str[:-2])  # Extract numerical value
        else:
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None

def get_fan_speed():
    try:
        # Run 'sensors' command to get sensor information
        result = subprocess.run(['sensors'], capture_output=True, text=True)
        
        # Extract fan speed from the output
        fan_lines = [line for line in result.stdout.split('\n') if 'fan' in line.lower()]
        if fan_lines:
            fan_speed_str = fan_lines[0].split()[1]
            return int(fan_speed_str)
        else:
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None

def get_ram_usage():
    try:
        # Get RAM usage using psutil
        ram_usage = psutil.virtual_memory().percent
        return ram_usage
    except Exception as e:
        print(f"Error: {e}")
        return None
    
def get_cpu_fan():
    try: 
        cpu_fan = psutil.sensors_fans()
        return cpu_fan
    except Exception as e:
        print(f"Error: {e}")
        return None

if __name__ == "__main__":
    print("Simulating an increase in CPU temperature...")
    # increase_cpu_temperature()
    print("CPU temperature increased.")

    # Check CPU temperature, fan speed, and RAM usage after simulation
    cpu_temperature = get_cpu_temperature()
    fan_speed = get_fan_speed()
    ram_usage = get_ram_usage()
    cpu_fan = get_cpu_fan()

    if cpu_temperature is not None:
        print(f"Current CPU Temperature: {cpu_temperature} °C")
    else:
        print("Failed to retrieve CPU temperature.")

    if fan_speed is not None:
        print(f"Current Fan Speed: {fan_speed} RPM")
    else:
        print("Failed to retrieve fan speed.")

    if ram_usage is not None:
        print(f"Current RAM Usage: {ram_usage} %")
    else:
        print("Failed to retrieve RAM usage.")

    if cpu_fan is not None:
        print(f"Current CPU Fan: {cpu_fan} %")
    else:
        print("Failed to retrieve CPU Fan.")
