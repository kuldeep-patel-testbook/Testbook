export async function getServerSideProps() {
    const time = new Date().toLocaleTimeString();


    return {
        props : {
            serverTime : time,
        },
    };
}

export default function SSR({ serverTime }) {
    return ( 
        <div>
            <h1> Server-side Rendering (SSR) </h1>
            <p>Time fetched on server: {serverTime}</p>
        </div>
    );
}