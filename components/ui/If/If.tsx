import React, { FC, PropsWithChildren } from 'react'

type IProps = PropsWithChildren<{
	condition: boolean
	children: React.ReactNode
	anotherChildren?: React.ReactNode
}>

const If: FC<IProps> = ({ condition, children, anotherChildren = null }) => {
	return <>{condition ? children : anotherChildren}</>
}

export default If
