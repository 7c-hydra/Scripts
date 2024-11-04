(async function checkCORS(targetURL, testOrigin) {
    try {
        console.log(`Checking CORS policy for: ${targetURL} from origin: ${testOrigin}`);

        // Create a custom header and method to simulate a real cross-origin request
        const response = await fetch(targetURL, {
            method: 'GET',  // You can also test 'POST', 'PUT', etc.
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-Custom-Test-Header': 'TestCORSHeader'
            },
            credentials: 'include' // To check if credentials are allowed
        });

        // Check for CORS headers in the response
        const corsHeaders = {
            allowOrigin: response.headers.get('Access-Control-Allow-Origin'),
            allowMethods: response.headers.get('Access-Control-Allow-Methods'),
            allowCredentials: response.headers.get('Access-Control-Allow-Credentials'),
            allowHeaders: response.headers.get('Access-Control-Allow-Headers')
        };

        console.log("CORS Headers:", corsHeaders);

        // Determine the CORS policy based on the headers
        if (corsHeaders.allowOrigin === '*') {
            console.warn("Potential security issue: The server allows requests from any origin ('*').");
        } else if (corsHeaders.allowOrigin === testOrigin) {
            console.log("The server allows requests from the specified origin.");
        } else {
            console.log("The server has restricted access and does not allow requests from the specified origin.");
        }

        if (corsHeaders.allowCredentials === 'true') {
            console.warn("Potential security issue: The server allows credentials in cross-origin requests.");
        }

    } catch (error) {
        console.error("Error checking CORS policy:", error);
    }
})('https://targetwebapp.com/api/endpoint', 'https://testorigin.com');
