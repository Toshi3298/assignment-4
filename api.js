const Server = {
    getAll: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const dbResults = [
                    { id: 1, title: "Study JavaScript", completed: false },
                    { id: 2, title: "Practice DOM", completed: true },
                    { id: 3, title: "Read Async Patterns", completed: false }
                ];
                console.log("Server: Data received.");
                resolve(dbResults);
            }, 1500);
        });
    }
};
