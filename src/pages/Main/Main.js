import React from 'react';
import './Main.css'

const Main = () => {
    return (

        <div className="box">
        <div className="nav">
            <div className="nav_container">
                <img className="nav_logo" src="./assets/main/instagram.png" />
                <i className="fa-light fa-pipe" />
                <p className="westagram">Westagram</p>
            </div>
            <div className="nav_searchbar">
                <input className="search" type="search" placeholder="검색" />
                <i className="fa-solid fa-magnifying-glass"></i>  
            </div>
            <div className="icons">
                <img className="icons explore" src="./assets/main/explore.png" />
                <img className="icons heart" src="./assets/main/heart.png" />
                <img className="icons profile" src="./assets/main/profile.png" />
            </div>
        </div>

        <div className="main">
            <div className="feeds">
                <article>
                    <div className="article-top">
                        <div className="insta_id">
                            <img className="wecode_image" src={"./assets/main/wecode.jpeg"} />
                            <div className="wecode_text">
                                <h4>wecode_bootcamp</h4>
                            </div>
                        </div>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>

                    <div>
                        <img className="wecode_article" src="./assets/main/wecode_article.png" />
                    </div>

                    <div className="article_bottom">
                        <div className="btn_bar">
                            <div className="btn_bar_left">
                                <i className="fa-sharp fa-regular fa-heart" />
                                <i className="fa-sharp fa-regular fa-comment" />
                                <i className="fa-sharp fa-solid fa-arrow-up-from-bracket" />
                            </div>
                            <div className="btn_bar_right">
                                <i className="fa-sharp fa-regular fa-bookmark" />
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <span>
                                    <img className="person" src="./assets/main/person1.png" />
                                </span>
                                <span>
                                    wecode_zzang님 외 4명이 좋아합니다.
                                </span>
                            </div>
                            <span className="user_name">
                                wecode_bootcamp
                            </span>
                            <span className="user_comment">
                                "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개 회사에서 오퍼를 받았습니다."
                            </span>
                            <span className="user_more">
                                ...더보기
                            </span>
                            <div className="user_time">
                                54분전
                            </div>
                            <div className="add_user_comment">

                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <input className="comment_text" type="text" placeholder="댓글 달기..." />
                        <button className="comment_submit">게시</button>
                    </div>
                </article>
            </div> 

            <div className="main_right">
                <div className="main_right_top">
                    <img className="wecode_image" src="./assets/main/wecode.jpeg" />
                    <div className="wecode_text">
                        <p className="name">wecode_bootcamp</p>
                        <p className="nickname">WeCode - 위코드</p>
                    </div>
                </div> 
                <div className="story">
                    <div className="story_top">
                        <h4 className="story_h4">스토리</h4>
                        <h5 className="story_h5">모두 보기</h5>
                    </div>
                    <div className="story_person">
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div>
                                <div className="preson_id">
                                    wecode_zzang
                                </div>
                                <div className="person_time">
                                    12분 전
                                </div>
                            </div>  
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div>
                                <div className="preson_id">
                                    wecode_zzang
                                </div>
                                <div className="person_time">
                                    23분 전
                                </div>
                            </div>    
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div>
                                <div className="preson_id">
                                    wecode_zzang
                                </div>
                                <div className="person_time">
                                    30분 전
                                </div>
                            </div>

                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div>
                                <div className="preson_id">
                                    wecode_zzang
                                </div>
                                <div className="person_time">
                                    45분 전
                                </div>
                            </div>
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div>
                                <div className="preson_id">
                                    wecode_zzang
                                </div>
                                <div className="person_time">
                                    45분 전
                                </div>
                            </div>
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div>
                                <div className="preson_id">
                                    wecode_zzang
                                </div>
                                <div className="person_time">
                                    55분 전
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommend">
                    <div className="recommend_top">
                        <h4 className="story_h4">회원님을 위한 추천</h4>
                        <h5 className="story_h5">모두 보기</h5>
                    </div>
                    <div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div className="follow_person">
                                <div>
                                    <div className="person_id">
                                        wecode_zzang
                                    </div>
                                    <div className="person_time">
                                        12분 전
                                    </div>
                                </div>
                                <div className="follow">
                                    팔로우
                                </div>
                            </div>
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div className="follow_person">
                                <div>
                                    <div className="person_id">
                                        wecode_zzang
                                    </div>
                                    <div className="person_time">
                                        12분 전
                                    </div>
                                </div>
                                <div className="follow">
                                    팔로우
                                </div>
                            </div>
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div className="follow_person">
                                <div>
                                    <div className="person_id">
                                        wecode_zzang
                                    </div>
                                    <div className="person_time">
                                        12분 전
                                    </div>
                                </div>
                                <div className="follow">
                                    팔로우
                                </div>
                            </div>
                        </div>
                        <div className="recommend_person">
                            <span>
                                <img className="person" src="./assets/main/person1.png" />
                            </span>
                            <div className="follow_person">
                                <div>
                                    <div className="person_id">
                                        wecode_zzang
                                    </div>
                                    <div className="person_time">
                                        12분 전
                                    </div>
                                </div>
                                <div className="follow">
                                    팔로우
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company">
                    <h6>Westagram정보 지원 홍보센터 API 채용정보 개인정보처리방침 약관 디렉터리 프로필 해시태그 언어</h6>
                    <h6>2019 WESTAGRAM</h6>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Main;