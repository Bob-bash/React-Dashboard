import React from 'react'
import './bar.css'
import {useSelector} from 'react-redux'
import {Header} from '../components'
import { ResponsiveBar } from '@nivo/bar'
import {bardata as data} from '../data/bardata'
function Bar() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='barww barmove'>
      <Header title='Bar Chart' subtitle='Simple Bar Chart'/>
    <div className="barw"
    style={{height:'75vh'
    }}
    >
<ResponsiveBar
      theme={{
        axis:{
          ticks:{
            text:{
              fill:`${darkcolors.whitecolor}`,
              fontSize:13
            }
          },
          legend:{
            text:{
              fill:`${darkcolors.greencolor}`
            }
          }
        },
        legends:{
          text:{
            fontSize:14
          }
        }
      }}
        data={data}
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
        colors={{ scheme: 'purpleRed_green' }}
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
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
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
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 132,
                translateY: 0,
                itemsSpacing: 6,
                itemWidth: 105,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                itemTextColor: '#999',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                            itemTextColor:`${darkcolors.whitecolor}`
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
  )
}

export default Bar