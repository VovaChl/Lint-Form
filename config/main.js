var config = {
  appName: "MyApp",
database: {
          host: "localhost",
              port: 5432
},
features: {
feature1: true,
feature2: false,
   feature3: true
},
logging: {
    enabled: true,
    level: "info"
  },
"api_url": "https://api.example.com"
};

function initializeApp() {
       console.log("Initializing " + config.appName + "...");
console.log("Connecting to database at " + config.database.host + ":" + config.database.port);

if (config.features.feature1) {
console.log("Feature 1 is enabled!");
} else {
console.log("Feature 1 is disabled.");
}

if (config.features.feature2) {
console.log("Feature 2 is enabled!");
} else {
  console.log("Feature 2 is disabled.");
}

if (config.features.feature3) {
console.log("Feature 3 is enabled!");
} else {
console.log("Feature 3 is disabled.");
}
}

function fetchData(url) {
     return fetch(url)
.then(response => response.json())
 .catch(error => {
console.error("Failed to fetch data:", error);
    return null;
});
}

// Example usage:
initializeApp();

var apiUrl = config["api_url"];
if (apiUrl) {
fetchData(apiUrl);
}
