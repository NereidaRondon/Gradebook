export default function Footer(){
    const date = new Date();
    const year= 1900 + date.getYear();

    return(
        <footer>
            <h3>Gradebook Inc.</h3>
            <p>Copyright ©️{year}</p>        
        </footer>
    )
}