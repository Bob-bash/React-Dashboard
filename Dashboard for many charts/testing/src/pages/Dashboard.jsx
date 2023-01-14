import React from 'react'
import './dashboard.css'
import {Header, Progress} from '../components'
import {useSelector} from 'react-redux'
import {Dashcard,Littlecard} from '../components'
import {dashdata} from '../data/dashdata'
import {littlecarddata} from '../data/littlecarddata'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveChoropleth } from '@nivo/geo'
import {geodata as data,geofeatures} from '../data/geodata'
function Dashboard() {
  const darkcolors=useSelector(state=>state.darkcolors);
  const dashbar=[
    {
      "country": "AD",
      "hot dog": 88,
      "hot dogColor": "hsl(240, 70%, 50%)",
      "burger": 23,
      "burgerColor": "hsl(316, 70%, 50%)",
      "sandwich": 14,
      "sandwichColor": "hsl(3, 70%, 50%)",
      "kebab": 132,
      "kebabColor": "hsl(59, 70%, 50%)",
      "fries": 38,
      "friesColor": "hsl(10, 70%, 50%)",
      "donut": 73,
      "donutColor": "hsl(143, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 9,
      "hot dogColor": "hsl(119, 70%, 50%)",
      "burger": 173,
      "burgerColor": "hsl(114, 70%, 50%)",
      "sandwich": 103,
      "sandwichColor": "hsl(355, 70%, 50%)",
      "kebab": 158,
      "kebabColor": "hsl(128, 70%, 50%)",
      "fries": 164,
      "friesColor": "hsl(108, 70%, 50%)",
      "donut": 158,
      "donutColor": "hsl(259, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 72,
      "hot dogColor": "hsl(99, 70%, 50%)",
      "burger": 68,
      "burgerColor": "hsl(182, 70%, 50%)",
      "sandwich": 190,
      "sandwichColor": "hsl(277, 70%, 50%)",
      "kebab": 137,
      "kebabColor": "hsl(2, 70%, 50%)",
      "fries": 155,
      "friesColor": "hsl(232, 70%, 50%)",
      "donut": 108,
      "donutColor": "hsl(22, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 28,
      "hot dogColor": "hsl(53, 70%, 50%)",
      "burger": 82,
      "burgerColor": "hsl(78, 70%, 50%)",
      "sandwich": 151,
      "sandwichColor": "hsl(146, 70%, 50%)",
      "kebab": 182,
      "kebabColor": "hsl(216, 70%, 50%)",
      "fries": 84,
      "friesColor": "hsl(320, 70%, 50%)",
      "donut": 48,
      "donutColor": "hsl(344, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 187,
      "hot dogColor": "hsl(10, 70%, 50%)",
      "burger": 8,
      "burgerColor": "hsl(172, 70%, 50%)",
      "sandwich": 143,
      "sandwichColor": "hsl(359, 70%, 50%)",
      "kebab": 181,
      "kebabColor": "hsl(164, 70%, 50%)",
      "fries": 85,
      "friesColor": "hsl(273, 70%, 50%)",
      "donut": 171,
      "donutColor": "hsl(235, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 89,
      "hot dogColor": "hsl(56, 70%, 50%)",
      "burger": 145,
      "burgerColor": "hsl(89, 70%, 50%)",
      "sandwich": 176,
      "sandwichColor": "hsl(313, 70%, 50%)",
      "kebab": 33,
      "kebabColor": "hsl(229, 70%, 50%)",
      "fries": 162,
      "friesColor": "hsl(126, 70%, 50%)",
      "donut": 13,
      "donutColor": "hsl(82, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 34,
      "hot dogColor": "hsl(353, 70%, 50%)",
      "burger": 63,
      "burgerColor": "hsl(255, 70%, 50%)",
      "sandwich": 148,
      "sandwichColor": "hsl(124, 70%, 50%)",
      "kebab": 95,
      "kebabColor": "hsl(44, 70%, 50%)",
      "fries": 38,
      "friesColor": "hsl(229, 70%, 50%)",
      "donut": 101,
      "donutColor": "hsl(177, 70%, 50%)"
    }
  ]
  
  return (
    <div className='dashboardw dashboardmove'>
      <Header title='DASHBOARD' subtitle='Welcome to your dashboard'/>
      <div className="dashboard">
          <div className="dashboard__tops">
            {dashdata.map(item=>(
              <Dashcard 
              left__icon={item.left__icon} 
              left__des={item.left__des}
              left__value={item.left__value}
              right__deg={item.right__deg}
              right__dis={item.right__dis}
              right__value={item.right__value}
              />
            ))}
          </div>

          <div className="dashboard__center">
              <div className="dashboardd__centerl"
              style={{backgroundColor:`${darkcolors.sidebackcolor}`}}
              >
                  <h4
                  style={{color:`${darkcolors.whitecolor}`}}
                  >Geography Based Traffic</h4>
                <div className="dashboard__geo"
                >
                  <ResponsiveChoropleth
        data={data}
        features={geofeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuBu"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={45}
        projectionTranslation={[ 0.5, 0.75 ]}
        projectionRotation={[ -38, -360, -360 ]}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={[]}
    />
                </div>
              </div>
              <div className="dashboard__centerr">
                <h4
                style={{color:`${darkcolors.whitecolor}`,
                backgroundColor:`${darkcolors.sidebackcolor}`,
                marginBottom:'5px',
                padding: '10px 15px'
              }}
                >Recent Transaction</h4>
                <div className="dashboard__littlecards">
                  {littlecarddata.map(item=>(
                    <Littlecard 
                    left__subtitle={item.left__subtitle}
                    left__title={item.left__title}
                    center={item.center}
                    right__value={item.right__value}
                    />
                  ))}
                </div>
              </div>
          </div>

      <div className="dashboard__bottom">
          <div className="dashboard__bottoml"
          style={{backgroundColor:`${darkcolors.sidebackcolor}`,
        }}
          >
            <h4 style={{color:`${darkcolors.whitecolor}`,
            alignSelf:'flex-start'
          }} 
            >Campaign</h4>
            <div className="dashboard__bottoml__main">
                <Progress degree={300} distance={60}/>
                <div className="dashboard__bottoml__mainc" style={{textAlign:'center',
                marginTop:'15px'
              }}>
                  <p style={{color:`${darkcolors.greencolor}`}}>$48352 revenue generated</p>
                  <p style={{color:`${darkcolors.lightwhitecolor}`}}>Includes extra misc expenditures and costs</p>
                </div>
            </div>
          </div>
          <div className="dashboard__bottomc"
          style={{backgroundColor:`${darkcolors.sidebackcolor}`}}
          >
              <h4
              style={{color:`${darkcolors.whitecolor}`}}
              >Sales Quality</h4>
              <div className="dashboard__bar">
              <ResponsiveBar
              theme={{
                axis:{
                  ticks:{
                    text:{
                      fill:`${darkcolors.whitecolor}`,
                      fontSize:10
                    }
                  }
                }
              }}
                data={dashbar}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableGridY={false}
                enableLabel={false}
                labelSkipWidth={17}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 10,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemTextColor:`${darkcolors.whitecolor}`,
                        itemHeight: 15,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 10,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
              </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard