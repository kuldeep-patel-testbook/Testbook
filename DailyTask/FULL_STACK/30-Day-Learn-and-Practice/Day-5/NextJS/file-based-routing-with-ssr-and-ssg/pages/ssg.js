export async function getStaticProps() {
    const time = new Date().toLocaleTimeString();
    
    return {
        props : {
            buildTime : time
        },
        revalidate: 10,
    }
}

export default function SSG({buildTime}) {
  return (
    <div>
        <h1>Static Side Generation</h1>
        <p>Time fetched at build {buildTime} </p>
    </div>
  )
}