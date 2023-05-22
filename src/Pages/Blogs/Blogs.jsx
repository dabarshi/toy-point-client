

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl my-12'>My Toys</h1>
            <div className="space-y-2 p-5 mb-6">
                <div>
                    <p className="mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className="bg-slate-100 p-2">An access token is a credential that represents the authorization granted to a client application to access protected resources on behalf of a user. A refresh token is a credential that is used to obtain a new access token without requiring the user to reauthenticate. The access token is included in each request to the server to authenticate the client and authorize its access to specific resources. When the access token expires, the client can use the refresh token to request a new access token from the authentication server. The preferred approach is to use as HTTP-only cookies.</p>
                </div>
                <div>
                    <p className="mb-2">Compare SQL and NoSQL databases</p>
                    <p className="bg-slate-100 p-2">SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div>
                    <p className="mb-2">What is express js? What is Nest JS?</p>
                    <p className="bg-slate-100 p-2">Express js is a Nodejs framework which is used to build server-side application. Nestjs is a new Nodejs framework which is built on top of Express. It provides a structured way of building application with TypeScript</p>
                </div>
                <div>
                    <p className="mb-2">What is MongoDB aggregate and how does it work?</p>
                    <p className="bg-slate-100 p-2">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;