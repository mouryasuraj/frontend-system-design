/*

// Communication Techniques

1. If two server are talking to each other, then there are two possible ways to communicate between them:
   a. Two way communication: Both servers can send and receive messages to and from each other. This is typically done using protocols like HTTP, WebSockets, or gRPC, where both servers can act as clients and servers simultaneously.
   b. One way communication: One server sends messages to the other server, but the receiving server does not send any messages back. This is often used in scenarios where one server is responsible for sending notifications or updates to another server without expecting a response.


// Short Polling: In short polling, the client repeatedly sends requests to the server at regular intervals to check for new data or updates. If there is no new data, the server responds with an empty response, and the client continues to poll. This approach can lead to increased network traffic and latency, as the client may be sending requests even when there is no new data available.

// Long Polling: In long polling, the client sends a request to the server and waits for a response. If there is no new data available, the server holds the request open until new data becomes available or a timeout occurs. Once new data is available, the server responds to the client with the updated information. This approach reduces network traffic and latency compared to short polling, as the client only receives responses when there is new data to process.

// WebSockets: WebSockets provide a full-duplex communication channel over a single TCP connection, allowing for bidirectional communication between the client and server. This enables real-time updates and low-latency communication, making it suitable for applications such as chat applications, online gaming, and collaborative tools. WebSockets are often used in scenarios where continuous data exchange is required between the client and server.

// Server Side Events (SSE): SSE is a unidirectional communication protocol that allows servers to push updates to clients over a single HTTP connection. Clients can subscribe to specific events, and the server sends updates as they occur. SSE is suitable for applications that require real-time updates, such as live news feeds or stock price updates. However, it does not support bidirectional communication like WebSockets.

// Webhooks: Webhooks are a way for servers to send real-time notifications to other servers or clients when specific events occur. When an event is triggered, the server sends an HTTP POST request to a predefined URL (the webhook endpoint) with relevant data. Webhooks are commonly used for integrating different services and automating workflows, such as triggering actions in response to events in third-party applications.



// Populae Interview Questions:
1. What is the difference between short polling and long polling?
2. How do WebSockets differ from Server-Sent Events (SSE)?
3. Can you explain the concept of webhooks and provide an example of their use?
4. What are the advantages and disadvantages of using WebSockets for real-time communication?
5. Long Polling VS Webhook VS WebSockets
6. Unidirectional vs Bidirectional Communication
7. Security Aspects of Communication Protocols



*/