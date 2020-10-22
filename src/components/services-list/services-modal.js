import React from 'react'
import { FaTimes } from 'react-icons/fa'
import ModalStyles from './services-modal.module.scss'

const ServicesModal = ({ toggleServicesModal }) => {
  return (
    <>
      <div className={ModalStyles.modal}>
        <button
          onClick={toggleServicesModal}
          className={ModalStyles.modal__closeButton}
        >
          <FaTimes />
        </button>
        <div className={ModalStyles.modal__scrollableContent}>
          <h2 className={ModalStyles.modal__heading}>
            The Gentleman's Experience
          </h2>
          <small>* Prices have changed temporarily</small>
          <ul>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>
                  <span>BEST VALUE!</span> Hot Lather Shave and Haircut
                  Combo
                </p>
                <p>$50</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Haircut</p>
                <p>$29</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Beard Trim</p>
                <p>$18</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Haircut & Beard Trim</p>
                <p>$38</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Skin Fade</p>
                <p>$29</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Head Shave</p>
                <p>Price Varies</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Head Shave and Beard Trim</p>
                <p>$39</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Kids Haircut</p>
                <p>Price Varies</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Senior’s Haircut (65+)</p>
                <p>$18</p>
              </div>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>ULTIMATE SHARP SHAVE</p>
                <p>$55</p>
              </div>
              <p>
                Classic straight razor shave*, aromatic steamed towels, scalp,
                neck and shoulder massage, hot lather, after-shave tonics and
                beard oils.
              </p>
              <small>
                *Please note: The straight razor shave is not a double edge
                system. As with all shaves, nicks and abrasions can occur. The
                quality of the shave is dependent upon skin type and the
                coarseness of whiskers.
              </small>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Hot Lather Shave</p>
                <p>$35</p>
              </div>
            </li>
            <li>
              <div className={ModalStyles.modal__price}>
                <p>Waxing</p>
                <p>Price Varies</p>
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div className={ModalStyles.overlay}></div>
    </>
  )
}

export default ServicesModal