from django.db import models

# Create your models here.

class CPUTemperatureTransaction(models.Model):
    receipt = models.CharField(max_length=100000, default=None)
    cpu_temperature = models.FloatField(default=None)
    created_at = models.DateTimeField(null=True)
    transaction_type = models.CharField(max_length=1000, default=None)
    ram_usage = models.FloatField(null=True)
    cpu_fan_speed = models.FloatField(null=True)
    block_difficulty = models.FloatField(null=True)

    class Meta:
        db_table = 'cpu_temperature_transaction'
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.receipt
    

class LoadAlgorithm(models.Model):
    algorithm_name = models.CharField(max_length=10000, default=None, null=True)
    difficulty_level = models.FloatField(null=True)
    created_at = models.DateTimeField(null=True)

    class Meta:
        db_table = 'load_algorithm'
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.algorithm_name



