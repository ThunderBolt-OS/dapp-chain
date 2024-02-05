from django.db import models

# Create your models here.

class CPUTemperatureTransaction:
    receipt = models.CharField(max_length=100000, default=None)
    cpu_temperature = models.FloatField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    transaction_type = models.CharField(max_length=1000, default=None)
    ram_usage = models.FloatField()
    cpu_fan_speed = models.FloatField()

    class Meta:
        db_table = 'cpu_temperature_transaction'
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.receipt



