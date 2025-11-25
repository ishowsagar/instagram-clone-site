import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import pfp from "../assets/pfp.jpg";
import ProfileNav from "./ProfileNav";
export default function Profile() {
  // Free online images for demo
  const avatarImg =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2";
  const highlightImg =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=128&q=80";

  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div className="profile_outer">
      <div className="profile_header_row">
        <img src={pfp} alt="Profile avatar" className="profile_avatar" />
        <div className="profile_header_info">
          <div className="profile_username">
            ishowdenver <span>⚙️</span>
          </div>
          <div className="profile_name">
            𝘿 𝙀 𝙉 𝙑 𝙀 𝙍 <span>♪</span>
          </div>
          <div className="profile_stats profile_stats_row">
            <span>2 posts</span>
            <span>1,461 followers</span>
            <span>338 following</span>
          </div>
        </div>
      </div>
      <div className="profile_bio">
        " Ｊａｔｔ　ｄｏｎ＇ｔ　ｃａｒｅ　影往ぜ
        <span style={{ color: "#ff69b4" }}>🚩</span>
      </div>
      <div className="profile_buttons">
        <button className="profile_button">Edit Profile</button>
        <button className="profile_button">View archive</button>
      </div>

      <div className="profile_highlights">
        <div className="profile_highlight">
          <img
            src={highlightImg}
            alt="Music heals"
            className="profile_highlight_img"
          />
          <div className="profile_highlight_label">
            Music heals
            <span style={{ color: "#ff69b4" }}>💗</span>
          </div>
        </div>
        <div className="profile_highlight">
          <div
            className="profile_highlight_img"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#222",
            }}
          >
            <span style={{ fontSize: "2.5rem", color: "#fff" }}>+</span>
          </div>
          <div className="profile_highlight_label">New</div>
        </div>
      </div>
      {/* seperately select based on routes */}
      <div className="profile_grid_nav">
        <ProfileNav />
      </div>
      {/* these things i want to apprear based on routes */}
      {/* <div className="profile_posts_grid"> */}
      {/* <img src={postImg1} alt="Post 1" className="profile_post_img" />
            <img src={postImg2} alt="Post 2" className="profile_post_img" /> */}
      {/* </div> */}
      <Outlet />
    </div>
  );
}
