// import { useModel } from "@umijs/max";
import { useModel } from '@umijs/max'

export default () => {
  const message = useModel('demo')
  const { counter, increment, decrement } = useModel('counter')
  console.log(1111)
  const a = 2

  if (a == 2)
    console.log(1111)
  return (
    <>
      <div className="mb-4 flex">
        hello
      </div>
      <span>{counter}</span>
    </>
  )
}
