import React from "react";
import "./card.scss";
import Background from "../../images/DesertMin.png";

const Card = () => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="card-image-header">
          <div className="card-image-name">Anton</div>
          <div className="card-image-settings">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-title">Test title</div>
        <div className="card-tag-list">
          <div className="card-tag">tag</div>
          <div className="card-tag">tag</div>
          <div className="card-tag">tag</div>
        </div>
        <div className="card-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of ty
        </div>
        <div className="card-line" />

        <div className="card-footer">
          <div className="card-likes">
            <svg
              className="like-icon"
              width="17"
              height="16"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6891 2.41452C16.2738 1.96607 15.7806 1.61034 15.2377 1.36763C14.6949 1.12492 14.1131 1 13.5255 1C12.9379 1 12.3561 1.12492 11.8133 1.36763C11.2704 1.61034 10.7772 1.96607 10.3619 2.41452L9.49978 3.34476L8.63771 2.41452C7.79866 1.50912 6.66066 1.00047 5.47407 1.00047C4.28747 1.00047 3.14947 1.50912 2.31042 2.41452C1.47137 3.31992 1 4.5479 1 5.82833C1 7.10875 1.47137 8.33674 2.31042 9.24214L3.1725 10.1724L9.49978 17L15.8271 10.1724L16.6891 9.24214C17.1047 8.79391 17.4344 8.26171 17.6593 7.67596C17.8842 7.0902 18 6.46237 18 5.82833C18 5.19428 17.8842 4.56645 17.6593 3.9807C17.4344 3.39494 17.1047 2.86275 16.6891 2.41452V2.41452Z"
                stroke="#E8E8E8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="like-count">10</div>
          </div>

          <svg
            className="card-delete"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="delete-stroke"
              d="M2.5 5H4.16667H17.5"
              stroke="#E8E8E8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="delete-stroke"
              d="M6.66667 5.00001V3.33334C6.66667 2.89131 6.84227 2.46739 7.15483 2.15483C7.46739 1.84227 7.89131 1.66667 8.33334 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83334C5.39131 18.3333 4.96739 18.1577 4.65483 17.8452C4.34227 17.5326 4.16667 17.1087 4.16667 16.6667V5.00001H15.8333Z"
              stroke="#E8E8E8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="delete-stroke"
              d="M8.33333 9.16667V14.1667"
              stroke="#E8E8E8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="delete-stroke"
              d="M11.6667 9.16667V14.1667"
              stroke="#E8E8E8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
