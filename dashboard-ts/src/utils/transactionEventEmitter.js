import EventEmitter from 'events';
import axios from 'axios';
import { useCPUTemp } from 'src/contexts/CPUTempContext';


const transactionEventEmitter = new EventEmitter();

export const emitTransaction = async (type, data) => {
    const { cpuTemp, setCpuTemp } = useCPUTemp();
    transactionEventEmitter.emit(type, data);

    // GET the cpu temperature
    try {
        const getCpuTemperature = await axios.get('http://localhost:3000/cpu-temperature');
        console.log('GET API Response:', getCpuTemperature.data);
        setCpuTemp(getCpuTemperature.data.cpuTemperature);

    } catch (error) {
        console.error('Error getting cpu temperature', error);
    };

    // POST the cpu temp, type and data
    try {
        const postApiResponse = await axios.post('http://localhost:3000/cpu-temperature', {
            cpuTemperature: cpuTemp,
            type: type,
            data: data
        });
        console.log('POST API Response:', postApiResponse.data);

    } catch (error) {
        console.error('Error posting cpu temperature', error);
    };
};

export const subscribeToTransaction = (type, callback) => {
    transactionEmitter.on(type, callback);
};