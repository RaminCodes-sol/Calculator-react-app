import { useState } from 'react'




const Calculator = () => {
    const [value, setValue] = useState('')
    const [state, setState] = useState(false)



    /*-------HandleClick-------*/
    const handleClick = (num: string) => {
        if (state) {
            setValue('')
        } else {
            const firstValue = value.split('')[0]
            if (value.startsWith('0.')) {
                setValue(value + num)
            }
            if(firstValue === ('0' || '+' || '-' || '*' || '/')) {
                return
            }
          
            setValue(value + num)
        }
        setState(false)
    }


    /*-------Delete-------*/
    const Delete = () => {
        if (state) {
            setState(false)
        }

        if (value.length >= 1) {
            setValue(value.slice(0, -1))
        }
    }


    /*-------AllClear-------*/
    const allClear = () => {
        if (state) {
            setState(false)
        }
        if (value) {
            setValue('')
        }   
    }


    /*-------AddOperation-------*/
    const addOperation = (symbol: string) => {
        if(state) {
            setState(false)
        }
        setValue(value + symbol)
    }


    /*-------GetResult-------*/
    const getResult = () => {
        const lastValue = Number(value.slice(-1))
        if (isNaN(lastValue)) {
            return
        }
        setValue(eval(value).toString())
        setState(true)
    }



  return (
    <section className='w-full max-w-[400px] h-[500px] bg-gray-500 rounded-lg flex flex-col p-3 pt-5'>

        {/*----------Display----------*/}
        <div className="bg-black/50 h-[80px] rounded-lg text-white flex justify-start items-center px-3 text-3xl">
            <input type='text' value={value} className='text-black px-3 py-2 w-full rounded-lg outline-none border-none' readOnly/>
        </div>
        
        {/*----------Keyboard----------*/}
        <div className="flex flex-col w-full mt-6">
            <div className="key-container">
                <input type='button' value='AC' onClick={allClear} />
                <input type='button' value='DEL' onClick={Delete} />
                <input type='button' value='.' onClick={() => addOperation('.')} />
                <input type='button' value='/' onClick={() => addOperation('/')} />
            </div>
            
            <div className="key-container">
                <input type='button' value='7' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='8' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='9' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='*' onClick={() => addOperation('*')} />
            </div>

            <div className="key-container">
                <input type='button' value='4' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='5' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='6' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='+' onClick={() => addOperation('+')} />
            </div>

            <div className="key-container">
                <input type='button' value='1' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='2' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='3' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='-' onClick={() => addOperation('-')} />
            </div>

            <div className="key-container">
                <input type='button' value='00' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='0' onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e.currentTarget.value)} />
                <input type='button' value='=' onClick={() => getResult()} />
            </div>
        </div>

    </section>
  )
}

export default Calculator