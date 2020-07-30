export default process.env.NODE_ENV === 'develop' ? {
    hostUrl: 'http://localhost:8000',
    publishableKey: 'pk_test_H8r6lCpkZq32VjU1aTEZXM3q00pqIyojoI',
    secretKey: 'sk_test_HJpo16sw2VH69Fr3KE8ScW3f00yUEQ9Tzc'
} : {
    hostUrl: 'https://zootythebarber.com',
    publishableKey: 'pk_live_K9hX66d2Y6ZdYQHdtpa1hMn7008ntQP4f5',
}