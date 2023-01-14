import React from 'react'
import {linedata as data} from '../data/linedata'
import { ResponsiveLine } from '@nivo/line'
import {useSelector} from 'react-redux'
import {Header} from '../components'
import './line.css'
function Line() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='lineww linemove'>
    <Header title='Line Chart' subtitle='Simple Line Chart'/>
    <div className="linew"
    style={{height:'75vh'}}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
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
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 6,
            tickPadding: 9,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 42,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 6,
            tickPadding: 7,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -54,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-24}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 25,
                symbolShape: 'circle',
                itemTextColor: '#999',
                itemsSpacing:20,
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
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

export default Line