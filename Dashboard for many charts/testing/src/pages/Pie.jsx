import React from 'react'
import {Header} from '../components'
import {useSelector} from 'react-redux'
import {piedata as data} from '../data/piedata.js'
import { ResponsivePie } from '@nivo/pie'
import './pie.css'
function Pie() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='pieww piemove'>
      <Header title='Pie Chart' subtitle='Simple Pie Chart'/>
      <div className="piew"
      style={{height:'75vh'}}
      >
      <ResponsivePie
         theme={{
            legends:{
              text:{
                fontSize:16
              }
            }
          }}
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsTextOffset={10}
        arcLinkLabelsTextColor={darkcolors.whitecolor}
        arcLinkLabelsOffset={-24}
        arcLinkLabelsDiagonalLength={36}
        arcLinkLabelsStraightLength={26}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={4}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 25,
                symbolShape: 'circle',
                effects: [ 
                    {
                        on: 'hover',
                        style: {
                            itemTextColor:`${darkcolors.whitecolor}`
                        }
                    }
                ]
            }
        ]}
      />
      </div>
    </div>
  )
}

export default Pie