interface ContainerProps {
    children: React.ReactNode
}
 
const Container: React.FunctionComponent<ContainerProps> = ({children}) => {
    return (
        <div className="mx-auto max-w-7xl max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl max-sm:px-5">
            {children}
        </div>
    );
}
 
export default Container;