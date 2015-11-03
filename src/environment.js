import ExecutionEnvironment from 'exenv';

let message;

// Will be executed if the DOM are available
if (ExecutionEnvironment.canUseDOM) {
    message = 'Client side';
} else {
    message = 'Server side';
}

export default () => {
    console.log(message);
};