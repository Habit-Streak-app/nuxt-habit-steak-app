onRecordAfterCreateSuccess((e) => {
    // e.app
    // e.record

    const weeksToGenerate = 2; // Number of weeks to generate before and after the current week
    const generatedWeeks = [];

    function getCurrentWeek() {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - startOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
    }

    const currentWeek = getCurrentWeek();

    for (let i = currentWeek - weeksToGenerate; i <= currentWeek + weeksToGenerate; i++) {
        let collection = $app.findCollectionByNameOrId("weeks")
        let record = new Record(collection)
        let user = [];
        user.push(e.record.get("user"));

        record.set("number", i)
        record.set("user", user)
        record.set("habit", e.record.get("id"))

        $app.save(record)
    }


    e.next()
}, "habits")
