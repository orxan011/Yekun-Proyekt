import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>İKİ NƏFƏR ÜÇÜN LÜKS DAXİLDİR</h2>
                    <p>Sandals Resorts-da cütlüklər üçün dəbdəbəli Karib dənizi hər şey daxil tətilinin ən zirvəsini yaşamağa gəlin. Sent-Lusiya, Yamayka, Antiqua, Baham adaları, Qrenada, Barbados və Kurasaonun ən gözəl tropik məkanları və zərif çimərlikləri boyunca yerləşən dəbdəbəli çimərlik kurortlarımız qeyri-məhdud qonaqpərvər yeməklər, yüksək səviyyəli içkilər və şərablar təqdim edən unikal barlar və hər bir quru və su ilə təmin olunur. idman, o cümlədən golf kurortlarımızda pulsuz yaşıl ödənişlər və əksər kurortlarda PADI® sertifikatlı akvalanq. Bir toy planlaşdırırsınızsa, Sandals Karib toyları və bal ayı paketlərində liderdir.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>DÜNYA LİDERİ</h3>
                                <p>Ardıcıl olaraq 20 il hər şey daxil şirkət</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>HEÇ KİM ARTIĞI DAHİL DEYİL</h3>
                                <p>Ardıcıl olaraq 20 il hər şey daxil şirkət</p>
                                <button>Paketlərə Baxın</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">ƏLAVƏ 7% ENDİRİM ALIN</h4>
                        <p className="timer">12 SAAT QALDI!</p>
                        <p className="offers">BÜTÜN CARİ TƏKLİFLƏRƏ BAXIN</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>İstiqamətlər</label>
                            <select>
                                <option value="1">Grande Antigua</option>
                                <option value="1">Grenda</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Kontrol</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Yoxla</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Qiymətlər və Əlçatanlıqlar </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
