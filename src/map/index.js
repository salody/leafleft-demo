import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
import chinaProvider from '../lib/chinaProvider';


/**
 * 房子 http://www.uimaker.com/uploads/allimg/111215/1_111215144655_1.png
 * 军舰 http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconpmqpzosjmuu.png
 */
export default class MapLayer extends Component {
  // componentDidMount() {
  //   // 初始化地图。选择地图坐标和放大等级
  //   const map = L.map('map').setView([30.630827, 121.158932], 13);
  //
  //   // 添加地图瓦片/贴片。可以使用各种地图的外挂吧
  //   var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
  //     maxZoom: 18,
  //     minZoom: 5
  //   });
  //   Gaode.addTo(map);
  //
  //   // 添加地图maker
  //   let shipIcon = L.icon({
  //     iconUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconpmqpzosjmuu.png',
  //     iconSize: [38, 38],
  //     iconAnchor: [0, 0],
  //     popupAnchor: [18, 5],
  //     // shadowUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconpmqpzosjmuu.png',
  //     // shadowSize: [68, 95],
  //     // shadowAnchor: [22, 94]
  //   });
  //   let homeIcon = L.icon({
  //     iconUrl: 'http://www.uimaker.com/uploads/allimg/111215/1_111215144655_1.png',
  //     iconSize: [25, 25],
  //     // iconAnchor: [22, 94],
  //     // popupAnchor: [-3, -76],
  //     // shadowUrl: 'http://www.uimaker.com/uploads/allimg/111215/1_111215144655_1.png',
  //     // shadowSize: [68, 95],
  //     // shadowAnchor: [22, 94]
  //   });
  //   let popupConfig = {
  //
  //   }
  //   L.marker([30.630827, 121.158932], { icon: homeIcon }).addTo(map);
  //   L.marker([30.62189, 121.17627], { icon: shipIcon }).addTo(map)
  //     .bindPopup('hello')
  //     .openPopup()
  //     .bindTooltip("my tooltip text").openTooltip();
  //
  // }

  constructor() {
    super();
    this.state = {
      showDetails: false,
      showMarker: true
    }
  }

  render() {
    const position = [18.30503, 109.32565];
    let homeIcon = L.icon({
      iconUrl: 'http://www.uimaker.com/uploads/allimg/111215/1_111215144655_1.png',
      iconSize: [25, 25]
    });
    let shipIcon = L.icon({
      iconUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconpmqpzosjmuu.png',
      iconSize: [38, 38],
      iconAnchor: [0, 0],
      popupAnchor: [18, 5],
      // shadowUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconpmqpzosjmuu.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });
    return (
      <Map center={[18.30435, 109.3247]} zoom={18} style={{ height: '100%' }}>
        <TileLayer url={'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} />
        <Marker
          position={position}
          icon={homeIcon}
        >
        </Marker>
        <Marker
          position={[18.30435, 109.3247]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30496, 109.3239]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.3046, 109.32356]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30289,109.32425]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30449,109.32420]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30449,109.32320]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30376,109.32392]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30275,109.32526]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={[18.30261,109.32747]}
          icon={shipIcon}
          opacity={this.props.opacity}
        >
          <Popup>
            <div onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              })
            }}>
              <p>船名 复兴号<br />航速 10节    ></p>
              <div style={{display: this.state.showDetails ? 'block' : 'none'}}>
                <p>船长: Jack</p>
                <p>航向: 星辰大海</p>
                <p>船长电话: 1101101101</p>
                <p>船体宽度: 128</p>
              </div>
            </div>
          </Popup>
        </Marker>
      </Map>
    );
  }
}