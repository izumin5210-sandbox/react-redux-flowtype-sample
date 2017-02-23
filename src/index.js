/* @flow */

import React from 'react'
import { connect } from 'react-redux'

import type { Dispatch } from 'redux'
import type { Connector } from 'react-redux'

type ReduxAction = { type: $Subtype<string> };
type Action = { type: 'A' }

type State = {
  c: number,
  d: string,
}

type Props = {
  a: number,
  b: string,
  dispatch: Dispatch<Action>,
}

type OwnProps = {
  b: string,
}

const C1 = ({ a, b, dispatch }: Props) => <button onClick={dispatch}>{a} {b}</button>

const connector1: Connector<OwnProps, Props> = connect(
  ({ c }: State) => ({
    a: c,
  }),
  (dispatch: Dispatch<ReduxAction>) => ({
    dispatch,
  }),
)

const CC1 = connector1(C1)

function cc1_1() {
  return <CC1 b="1" />
}

function cc1_2() {
  // $FlowFixMe
  return <CC1 />
}

function cc1_3() {
  // $FlowFixMe
  return <CC1 b={1} />
}

// ================================

type RequiredProps = {
  b: string,
}

type InjectedProps = {
  a: number,
  dispatch: Dispatch<{ type: 'A' }>,
}

type Props2 = RequiredProps & InjectedProps

const connector2: Connector<RequiredProps, Props2> = connect(
  ({ c }: State) => ({
    a: c,
  }),
  (dispatch: Dispatch<ReduxAction>) => ({
    dispatch,
  }),
)

const CC2 = connector2(C1)

function cc2_1() {
  return <CC2 b="1" />
}

function cc2_2() {
  // $FlowFixMe
  return <CC2 />
}

function cc2_3() {
  // $FlowFixMe
  return <CC2 b={1} />
}
