import React from 'react'
import './Footer.css'
import NavSection from './navsection/NavSection';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

const Footer = () => {
  const { navSection, tiles, addressQueries, bottomFooter } = useSelector(state => state.footerState);

  return (
    <>
      <div className='footer'>
        <div className="footer-left">
          <div className="footer-list">
          {navSection.map((item,index) => (
            <div  key={index} className="footer-navsection">
              <NavSection item={item} />
            </div>
          ))}
          </div>
          <div className="footer-connect">
            <div className="footer-title">
              connect with us
            </div>
            <div className="footer-socialTile">
              {tiles.socialTile.map((item,index) => (
                <div key={index} className="footer-logo">
                  <a href={item.link.href}>
                    <img
                      src={item.logoUrl}
                      alt={item.link.title}
                    />
                  </a>
                </div>
              ))}
            </div>
            <div className="footer-write_us_link">
              {parse(tiles.suggestionTile.descriptionText)}
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <div className='footer_title'>
              {addressQueries.companyName}
            </div>
            <div className="amway-address">
              {addressQueries.address}
            </div>
            <div className='amway-contact'>
              {addressQueries.queryHere}
            </div>
            <div className='footer-tel_no'>
              {addressQueries.emailTitle}
              <a href={`mailto:${addressQueries.email}`}>{addressQueries.email}</a>
            </div>
            <div className='footer-tel_no'>
              {addressQueries.connectHereTitle}
              <a href={`tel:${addressQueries.connectHere}`}>{addressQueries.connectHere}</a>{addressQueries.cin}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_footer">
        <div className="copyright-container">      
          {bottomFooter.copyRight.text}
          <a href={bottomFooter.links.siteMap.href} >{bottomFooter.links.siteMap.title}</a>
        </div>
      </div>
    </>
  )
}

export default Footer
