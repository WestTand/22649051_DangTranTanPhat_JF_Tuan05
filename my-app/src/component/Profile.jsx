import React from "react";
import DataProfile from "../data/DataProfile";
import "./Profile.css";
import ShareIcon from "../image/Share fat.png";
import Arrowforward from "../image/Arrow forward ios 2.png";
export default function Profile() {
  const profile = DataProfile[0]; // Lấy dữ liệu đầu tiên trong mảng

  return (
    <div className="profile1">
      {/* Avatar */}
      <div className="address">
        Home
        <span className="subscribers">
          <img src={Arrowforward} alt="" /> Your Recipe Box
        </span>
      </div>

      <h1>{profile.name}'s Recipe Box</h1>
      <div className="profile">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="profile-avatar"
        />
        {/* Thông tin chi tiết */}
        <div className="profile-content">
          <p>{profile.info}</p>

          {/* Thông tin đăng ký & Nút chia sẻ */}
          <div className="profile-actions">
            <span className="subscribers">
              {profile.totalSubscribe} Subscribes
            </span>
            <button className="share-btn">
              Share <i className="fa fa-share"></i>
              <img src={ShareIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="Sa">Saved Recipes</div>
        <div className="Fo">Folders</div>
        <div className="Re">Recipes by Genevieve</div>
      </div>
    </div>
  );
}
