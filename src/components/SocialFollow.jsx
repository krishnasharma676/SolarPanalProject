import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png';
import twitter from '../assets/twitter.png';

const SocialFollow = () => {
  return (
    <section
      className="w-full p-[35px] rounded-tl-[47px] sm:flex-row sm:items-center gap-4 sm:gap-[60px] py-10 mt-[10vh]"
      style={{background: 'linear-gradient(to right, #333333, #26262600)'}}
    >
      <div>
        <h3 className="text-white text-[32px] font-semibold">FOLLOW US</h3>
        <p className="text-[#999999] text-[16px] mt-1">On Social Network</p>
      </div>

      <div className="flex mt-[20px] items-center gap-4">
        <img src={twitter} alt="Twitter" className="w-[60px] h-[60px] cursor-pointer" />
        <img src={facebook} alt="Facebook" className="w-[60px] h-[60px] cursor-pointer" />
        <img src={instagram} alt="Instagram" className="w-[60px] h-[60px] cursor-pointer" />
      </div>
    </section>
  );
};

export default SocialFollow;
