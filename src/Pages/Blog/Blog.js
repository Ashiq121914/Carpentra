import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("blog");
  return (
    <div className="w-3/4 mx-auto my-10 border border-slate-800 p-10 shadow-xl shadow-zinc-500 rounded-lg">
      <div>
        <p className="text-3xl mt-10">1. Difference between SQL and NoSQL?</p>
        <p className="text-xl">
          =<br />
          SQL databases are primarily called as Relational Databases (RDBMS);
          whereas NoSQL database are primarily called as non-relational or
          distributed database. <br />
          SQL databases defines and manipulates data based structured query
          language (SQL). Seeing from a side this language is extremely
          powerful. SQL is one of the most versatile and widely-used options
          available which makes it a safe choice especially for great complex
          queries. But from other side it can be restrictive. SQL requires you
          to use predefined schemas to determine the structure of your data
          before you work with it. Also all of your data must follow the same
          structure. This can require significant up-front preparation which
          means that a change in the structure would be both difficult and
          disruptive to your whole system. A NoSQL database has dynamic schema
          for unstructured data. Data is stored in many ways which means it can
          be document-oriented, column-oriented, graph-based or organized as a
          KeyValue store. This flexibility means that documents can be created
          without having defined structure first. Also each document can have
          its own unique structure. The syntax varies from database to database,
          and you can add fields as you go.
        </p>
      </div>
      <div>
        <p className="text-3xl mt-10">2. What is JWT, and how does it work?</p>
        <p className="text-xl">
          =<br />
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed. JWTs can be signed using a
          secret (with the HMAC algorithm) or a public/private key pair using
          RSA or ECDSA. <br />A JWT is a string made up of three parts,
          separated by dots (.), and serialized using base64. In the most common
          serialization format, compact serialization, the JWT looks something
          like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON
          strings: The header and the payload. The signature. The JOSE (JSON
          Object Signing and Encryption) header contains the type of token — JWT
          in this case — and the signing algorithm. The payload contains the
          claims. This is displayed as a JSON string, usually containing no more
          than a dozen fields to keep the JWT compact. This information is
          typically used by the server to verify that the user has permission to
          perform the action they are requesting. There are no mandatory claims
          for a JWT, but overlaying standards may make claims mandatory. For
          example, when using JWT as bearer access token under OAuth2.0, iss,
          sub, aud, and exp must be present. some are more common than others.
          The signature ensures that the token hasn’t been altered. The party
          that creates the JWT signs the header and payload with a secret that
          is known to both the issuer and receiver, or with a private key known
          only to the sender. When the token is used, the receiving party
          verifies that the header and payload match the signature.
        </p>
      </div>
      <div>
        <p className="text-3xl mt-10">
          3. What is the difference between javascript and NodeJS?
        </p>
        <p className="text-xl">
          =<br />
          1. JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language. As a result, it is used to create network-centric
          applications. It's a networked system made for data-intensive
          real-time applications. If we compare node js vs. python, it is clear
          that node js will always be the preferred option. 2. JavaScript is a
          simple programming language that can be used with any browser that has
          the JavaScript Engine installed. Node.js, on the other hand, is an
          interpreter or execution environment for the JavaScript programming
          language. It requires libraries that can be conveniently accessed from
          JavaScript programming to be more helpful. 3. Any engine may run
          JavaScript. As a result, writing JavaScript is incredibly easy, and
          any working environment is similar to a complete browser. Node.js, on
          the other hand, only enables the V8 engine. Written JavaScript code,
          on the other hand, can run in any context, regardless of whether the
          V8 engine is supported. 4. A specific non-blocking operation is
          required to access any operating system. There are a few essential
          objects in JavaScript, but they are entirely OS-specific. Node.js, on
          the other hand, can now operate non-blocking software tasks out of any
          JavaScript programming. It contains no OS-specific constants. Node.js
          establishes a strong relationship with the system files, allowing
          companies to read and write to the hard drive. 5. The critical
          benefits of JavaScript include a wide choice of interfaces and
          interactions and just the proper amount of server contact and direct
          visitor input.
        </p>
      </div>
      <div>
        <p className="text-3xl mt-10">
          4. How does NodeJS handle multiple requests at the same time?
        </p>
        <p className="text-xl">
          =<br />
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
