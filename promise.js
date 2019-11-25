const confuse = () => new Promise((resolve, reject) => {
    const retryLogic = (retryCount) => {
        if (retryCount <= 0)
            return reject("Cannot complete the task even after retry")
        else {
            doTheTask()
                .then(resolve)
                .catch(ex => {
                    setTimeout(() => {
                        retryLogic(--retryCount)
                    },(1000)*10) // execute after 10 sec
                });
        }
    }
    retryLogic(5);
});
