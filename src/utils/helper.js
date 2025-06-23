    
        var nameList = [
                'Time','Past','Future','Dev',
                'Fly','Flying','Soar','Soaring','Power','Falling',
                'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
                'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
                'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
                'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
                'Mine','Your','Worst','Enemy','Hostile','Force','Video',
                'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
                'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
                'Script','Writer','Near','Close','Open','Cube','Circle',
                'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
                'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
                'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
                'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
                'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
                'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
                'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
                'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
                'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
                'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
                'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
            ];
        
           
        
          export  function generateRandomName() {
              return nameList[Math.floor( Math.random() * nameList.length )];
              
            };

         export   function makeRandomMessage(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

 const photourl = [
    'https://yt4.ggpht.com/ytc/AIdro_n5jhBMgdrE7WFnKKuwEKK0iT9LUeTW0oTCmGRsck3QGRhqsGcoCesxpa6j0WBHnWJxxg=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/UAnsd9ds7W8OiMGgaAgCbO8sEv3LQz9jYVa7nCqW5rXVZiwiBflyurVFcUEzWu0ApLTeF4kk=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/ytc/AIdro_mxd3Qels4-xHG3jli3CCXRdd38xpNrGdrKkcMeYrs_ytayMuPl1b50TqCPD-gw609mTw=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/H9eIsKzzP7mrnOF97qSCrUS3k8766UG8-CVbw6GlOtpCPXV9D0JFeeosoXsbbkgztSChUzVllg=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/8bGyxRe7qp0LgaeODgoNCQ5ZahLPg5gLiUXq0eqcxxSSNicuPfDDC1-F02dDsvybNXCeLfRDdQ=s64-c-k-c0x00ffffff-no-rj',
  'https://lh3.googleusercontent.com/ogw/AF2bZyhj13bzJooeBvioImitbj4j_K8jfpB0utepUE2y4ApyiA=s64-c-mo',
  'https://yt4.ggpht.com/oSdcJpGFkdy62WhA5nRPHm_xlNopT9TeQOF0tHr9o1ndrU1Fp8Nazu_tCJuusVJ1ABP8DT-oE9M=s32-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/ytc/AIdro_mzwk73fmnfDwFs4aca8l6kkQx6GyTAVAtENSyHlH_Zex_oOyaCVbcQl_w7mzDMX7MLRg=s32-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/46aLyZPBexx8_IRcggy6W1TFadm3Q5lc7OM1_4PiMXXh7aOO55uaGW6bLlBrG5hILvavq13AbhU=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/44nVTzHFgOffpb16nG2Hk1mJIDD_TuFlKRgCmcT0BmWXiTSj9HXtpEBTSVO9HvVr4kt_xYiKSvE=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/uqS1qnM65DVEJwJ031kSR3Hz_UFombvxKvV55X5Vg6mcZy044Yf3RhIveJGBxWdU_2iJzADy=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/ytc/AIdro_n5jhBMgdrE7WFnKKuwEKK0iT9LUeTW0oTCmGRsck3QGRhqsGcoCesxpa6j0WBHnWJxxg=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/ytc/AIdro_lbpRUu5gbsvWTmsdI3NZ15kpk0Ej3nbI--JsDIpwlL-8rX0jbLwi0IQmkjLB0HWRjkqw=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/ytc/AIdro_n52f8TA5af_HXIXBvm8FdTy_3-eBbyqNdBX5EkO0SvwS_hkoJ26BnO5qVLfVx83uSoGg0=s64-c-k-c0x00ffffff-no-rj',
  'https://yt4.ggpht.com/ytc/AIdro_lbpRUu5gbsvWTmsdI3NZ15kpk0Ej3nbI--JsDIpwlL-8rX0jbLwi0IQmkjLB0HWRjkqw=s64-c-k-c0x00ffffff-no-rj'
];


export const profileurl=[
  "https://yt3.ggpht.com/ytc/AIdro_lkbDfs5VQNRGSeYlKOEnqJR7P78rgqCgEh9EpDgWHJQ4s=s88-c-k-c0x00ffffff-no-rj",
  'https://yt3.ggpht.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s88-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/QjmWo51iVbNROKfhuaNciKepsX4sxKF2lg0r5MQGcPKCPgVQiTXg3bBt6A0BgfyoV2Q6DLhwZw=s88-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/ytc/AIdro_lYYjY-KBVYcdhc7mH08z54gPDnWhKnfsyiFvNxtscTaMc=s88-c-k-c0x00ffffff-no-rj',
  'https://yt3.ggpht.com/-6HpoHzkvmV5U-vaeKi7o4DeSOBDzxF8yfUfe_TpDCN-Vmh2lRrd3dWJzceFFUUn1Znj-9tzLWo=s88-c-k-c0x00ffffff-no-rj'
]

export default photourl;
