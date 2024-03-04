// '...props' here could be called anything - it's a proxy prop
// this means all props from the parents element are forwarded to this custom component
export default function Section({title, children, ...props}){
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}