'use strict'

/* eslint-env mocha */
const isLoopbackAddr = require('../')
const { expect } = require('aegir/utils/chai')

const nonLoopbackIps = [
  '10.0.0.0',
  '10.1.1.1',
  '10.255.255.255',
  '172.16.0.0',
  '172.31.255.255',
  '192.168.0.0',
  '192.168.255.255',
  '164.101.185.82',
  '226.84.185.150',
  '255.38.207.121',
  '71.12.102.112',
  '2001:8a0:7ac5:4201:3ac9:86ff:fe31:7095',
  '::'
]

const loopbackIps = [
  '127.0.0.1',
  '127.1.0.1',
  '127.1.1.0',
  '127.255.255.255',
  '::1'
]

describe('is-loopback-addr', () => {
  it('identifies loopback ips', () => {
    loopbackIps.forEach((ip) => {
      expect(isLoopbackAddr(ip)).to.eql(true)
    })
  })

  it('identifies non loopback ips', () => {
    nonLoopbackIps.forEach((ip) => {
      expect(isLoopbackAddr(ip)).to.eql(false)
    })
  })
})
