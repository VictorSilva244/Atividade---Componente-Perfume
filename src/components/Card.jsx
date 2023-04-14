import './Card.css'
import perfume from '../assets/image-product-desktop.jpg'
import cartIcon from '../assets/icon-cart.svg'



export function Card(){
    return(
        <section className='card'>
            
            <div className="img-perfume"></div>

            <section className='info'>
                <p>P E R F U M E</p>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <section className='preços'>
                    <div className='precoAtual'>$149.99</div>
                    <div className='precoOriginal'>$169.99</div>
                </section>
                <button><img src={cartIcon}/> Add to Cart</button>
            </section>

            
        </section>
        
    )



}