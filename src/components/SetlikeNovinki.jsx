import { useState } from 'react';
import Heart from '../../public/assets/heart.png';
import { Link } from 'react-router-dom';
import { novinkidata } from '../store/data';

const Setlike = ({ addLike2, removeLike2, addKorzina2,  novinkidata } ) => {
    const [like, setLike] = useState(false);
    // "like" o'zgaruvchisi va uning o'zgarish funksiyasi
    const [bgbutton, setBgbutton] = useState(false); // "like" o'zgaruvchisi va uning o'zgarish funksiyasi

    const toggleLike = (id) => {
        setLike(!like);
        // "like" o'zgaruvchisini o'zgartirish
        if (!like) {
            addLike2(id)
        }
        else {
            removeLike2(id)
        }
    };

    const togglebtn = () => {
        setBgbutton(!bgbutton)
    }


    return (
        <div>
            <div className='relative'>
                <button onClick={() => toggleLike(novinkidata.id)} className={`shadow-lg absolute rounded-full right-2 p-2 ${like ? 'bg-red-400' : 'bg-slate-200/50'}
                                 rounded-full duration-500`}>
                    <img width={22} className=' rounded-lg ' height={22} src={Heart} alt="Heart icon" />
                </button>
                <Link to={`/novinkidata/${novinkidata.id}`}>
                    <img width={272} height={160} className='mx-auto h-[177px]' src={novinkidata.img} alt="Card img" />

                </Link>
            </div>
            <div className='p-2 space-y-2'>

                <div className='flex justify-between items-center mb-7'>
                    <h3 className='font-bold text-lg text-qorag'>{novinkidata.price} ₽</h3>
                </div>


                <p className='text-base  font-normal text-qorag'>

                    {novinkidata.name}
                </p>

                {/* **************************** */}

                {/* ****************** */}

                <button onClick={() => addKorzina2(novinkidata.id)} className='p-2 hover:bg-olov hover:text-white hover:border-none transition-delay-500 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

            </div>
        </div>
    );
}

export default Setlike;
