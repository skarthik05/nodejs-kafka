const { Kafka } = require('./client')

async function init() {
    const admin = Kafka.admin()
    console.log("Admin connecing...")
    admin.connect();
    console.log("Admin connected successfully...")

    console.log("Creating Topics: [rider-updates]")
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2
        }]
    })
    console.log("Topics created successfully: [rider-updates]")

    console.log("Disconnecting Admin...")
    await admin.disconnect()


}
init()