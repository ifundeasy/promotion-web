import React from 'react'
import { ChoroplethMap } from '@ant-design/maps'

const DemoChoroplethMap = () => {
  const ProvinceData = [
    {
      name: 'Yunnan Province',
      code: 530000,
      value: 17881.12,
    },
    {
      name: 'Heilongjiang Province',
      code: 230000,
      value: 16361.62,
    },
    {
      name: 'Guizhou Province',
      code: 520000,
      value: 14806.45,
    },
    {
      name: 'Beijing',
      code: 110000,
      value: 30319.98,
    },
    {
      name: 'Hebei Province',
      code: 130000,
      value: 36010.27,
    },
    {
      name: 'Shanxi Province',
      code: 140000,
      value: 16818.11,
    },
    {
      name: 'Jilin Province',
      code: 220000,
      value: 15074,
    },
    {
      name: 'Ningxia Hui Autonomous Region',
      code: 640000,
      value: 3705.18,
    },
    {
      name: 'Liaoning Province',
      code: 210000,
      value: 25315.35,
    },
    {
      name: 'Hainan Province',
      code: 460000,
      value: 4832.05,
    },
    {
      name: 'Inner Mongolia Autonomous Region',
      code: 150000,
      value: 17289.22,
    },
    {
      name: 'Tianjin',
      code: 120000,
      value: 18809.64,
    },
    {
      name: 'Xinjiang Uygur Autonomous Region',
      code: 650000,
      value: 12199.08,
    },
    {
      name: 'Shanghai',
      code: 310000,
      value: 32679.87,
    },
    {
      name: 'Shaanxi Province',
      code: 610000,
      value: 24438.32,
    },
    {
      name: 'Gansu Province',
      code: 620000,
      value: 8246.07,
    },
    {
      name: 'Anhui Province',
      code: 340000,
      value: 30006.82,
    },
    {
      name: 'Hong Kong Special Administrative Region',
      code: 810000,
      value: 0,
    },
    {
      name: 'Guangdong Province',
      code: 440000,
      value: 97277.77,
    },
    {
      name: 'Henan Province',
      code: 410000,
      value: 48055.86,
    },
    {
      name: 'Hunan Province',
      code: 430000,
      value: 36425.78,
    },
    {
      name: 'Jiangxi Province',
      code: 360000,
      value: 21984.78,
    },
    {
      name: 'Sichuan Province',
      code: 510000,
      value: 40678.13,
    },
    {
      name: 'Guangxi Zhuang Autonomous Region',
      code: 450000,
      value: 20353.51,
    },
    {
      name: 'Jiangsu Province',
      code: 320000,
      value: 92595.4,
    },
    {
      name: 'Macau Special Administrative Region',
      code: 820000,
      value: null,
    },
    {
      name: 'Zhejiang Province',
      code: 330000,
      value: 56197.15,
    },
    {
      name: 'Shandong Province',
      code: 370000,
      value: 76469.67,
    },
    {
      name: 'Qinghai Province',
      code: 630000,
      value: 2865.23,
    },
    {
      name: 'Chongqing City',
      code: 500000,
      value: 20363.19,
    },
    {
      name: 'Fujian Province',
      code: 350000,
      value: 35804.04,
    },
    {
      name: 'Hubei Province',
      code: 420000,
      value: 39366.55,
    },
    {
      name: 'Tibet Autonomous Region',
      code: 540000,
      value: 1477.63,
    },
    {
      name: 'Taiwan Province',
      code: 710000,
      value: null,
    },
  ]
  const config = {
    map: {
      type: 'mapbox',
      style: 'blank',
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: ProvinceData,
      joinBy: {
        sourceField: 'code',
        geoField: 'adcode',
      },
    },
    viewLevel: {
      level: 'country',
      adcode: 100000,
    },
    autoFit: true,
    color: {
      field: 'value',
      value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: '#ccc',
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: '#000',
        opacity: 0.8,
        fontSize: 10,
        stroke: '#fff',
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    state: {
      active: {
        stroke: 'black',
        lineWidth: 1,
      },
    },
    tooltip: {
      items: ['name', 'adcode', 'value'],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  }
  return (
    <section style={{ width: '100%', height: 600 }}>
      <ChoroplethMap {...config} />
    </section>
  )
}
export default DemoChoroplethMap
