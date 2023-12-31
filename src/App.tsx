import * as React from 'react';
import './style.css';
import Enumerable from 'linq';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import ReactJson from 'react-json-view';
interface Order {
  finishGoods: string;
  clearToDock: string;
  someProperty: string;
  anotherProperty: number;
}
export default function App() {
  const orderse = [
    {
      id: '10169386',
      mdmId: '41195121',
      region: {
        id: '205383b7-0605-46a1-9588-1e290d182bc2',
        name: 'East US 2',
        regionType: 'Hero',
        metro: 'Boydton',
        coordinates: [-78.39007, 36.66742],
      },
      zone: {
        id: 'a4e2a166-194f-491c-8327-174298cc48a6',
        name: 'AZ03',
        regionName: 'East US 2',
      },
      dataCenter: 'LVL08',
      status: '',
      fulfillment: '5039932',
      fulfillmentType: 'PBR',
      delta: {
        value: 0,
        status: 'green',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      priorityStack: {
        value: 13391,
        status: 'gray',
      },
      remediationCluster: false,
      finishedGoods: {
        estimated: '2023-02-05',
        actual: '2023-02-05',
        initial: '2023-02-05',
      },
      expediteDock: {
        planned: '2023-05-05',
      },
      plannedDock: {
        planned: '2023-05-05',
      },
      releaseToEngineering: {
        estimated: '2023-06-07',
        initial: '2023-05-07',
      },
      expediteLive: {
        estimated: '2023-06-15',
        initial: '2023-05-15',
      },
      plannedLive: {
        planned: '2023-06-15',
        initial: '2023-05-15',
      },
      pbrDate: {
        estimated: '2022-12-21',
        actual: '2022-12-16',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 10,
      platform: 'Intel',
      platformGeneration: 'Gen7.1',
      platformGenerationGroup: 'Gen7',
      planSkuName: '10_Storage_XIO_Intel_Gen7.1_(104)_M1156431_NA',
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'LENOVO',
      platformGrouping: 'Storage',
      jcabLastModifiedDateTime: '2022-10-18T04:52:11+00:00',
      frozenCode: 'AZ',
      factoryCode: 'MTY',
      factoryLocation: 'MTY',
      resourceType: 'XIO Storage',
      deploymentPath: 'WHSE2NonPBR',
      transitDays: 3,
      pbrFulfillmentId: '5049016',
      pbrMdmStatus: 'Delivered - reserved',
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: 'M 99',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1688491906,
      _etag: '"5f070564-0000-0800-0000-64a457820000"',
    },
    {
      id: '10175205',
      mdmId: '41195086',
      region: {
        id: '62b5f647-6ec8-427a-abc4-f7f32e981eb3',
        name: 'West Europe',
        regionType: 'Hero',
        metro: 'Amsterdam',
        coordinates: [4.9041, 52.3676],
      },
      zone: {
        id: 'bd7df3e0-a82f-4e1c-8dbf-f3f5d3d9d5d5',
        name: 'AZ03',
        regionName: 'West Europe',
      },
      clusterName: 'AMS09PrdVVS02',
      dataCenter: 'AMS09',
      status: 'Dock',
      fulfillment: '5043285',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -194,
        status: 'red',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      priorityStack: {
        value: 11880,
        status: 'gray',
      },
      remediationCluster: false,
      reservation: {
        actual: '2022-08-30',
      },
      clearToDock: {
        actual: '2022-11-15',
        initial: '2022-10-21',
      },
      coordinatedDock: {
        estimated: '2022-10-18',
      },
      expediteDock: {
        planned: '2022-09-26',
        estimated: '2022-11-21',
        actual: '2022-11-21',
        initial: '2022-11-21',
      },
      plannedDock: {
        planned: '2022-09-26',
      },
      releaseToEngineering: {
        estimated: '2023-05-10',
        initial: '2023-05-10',
      },
      expediteLive: {
        estimated: '2023-07-23',
        initial: '2023-05-10',
      },
      plannedLive: {
        planned: '2023-01-10',
        initial: '2023-05-10',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 2,
      platform: 'Intel',
      platformGeneration: 'Gen1.2',
      platformGenerationGroup: 'Gen1',
      planSkuName:
        '2_AzureDedicated_VMWARE_MSEE_Intel_Gen1.2_103_BM VMW VS MSEE_MSEE_M1183261-001',
      hasTasks: false,
      platformTier: '103',
      oemSupplier: 'WWT',
      platformGrouping: 'Other',
      shipApprovedDate: '2023-07-11T05:47:05.89+00:00',
      jcabLastModifiedDateTime: '2022-10-24T05:34:36+00:00',
      frozenCode: 'DC',
      factoryCode: 'AMSTERDAM',
      factoryLocation: 'AMSTERDAM',
      resourceType: 'BM VMW VS MSEE',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 7,
      firstFootPrint: false,
      isShipApproved: 'Yes',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1689074529,
      _etag: '"690b1033-0000-0800-0000-64ad3b610000"',
    },
    {
      id: '10227045',
      mdmId: '71899092',
      region: {
        id: '5eab9f70-3b2c-4700-9f9e-c35c3bf738d8',
        name: 'East US',
        regionType: 'Hero',
        metro: 'Blue Ridge',
        coordinates: [-84.32528, 34.86548],
      },
      zone: {
        id: 'fe2145dd-b22f-4b62-8d0d-30e2284f56ef',
        name: 'AZ03',
        regionName: 'East US',
      },
      clusterName: 'MNZ26PrdStr06-01',
      dataCenter: 'MNZ26',
      status: 'Dock',
      fulfillment: '5065298',
      fulfillmentType: 'PBR',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -3,
        status: 'green',
      },
      priorityCode: '00',
      priorityDescription: '00-M1 Manual Assignment',
      remediationCluster: false,
      finishedGoods: {
        estimated: '2023-06-28',
        actual: '2023-06-28',
        initial: '2023-06-28',
      },
      reservation: {
        actual: '2023-07-05',
      },
      clearToDock: {
        actual: '2023-07-07',
        initial: '2023-07-14',
      },
      coordinatedDock: {
        estimated: '2023-07-10',
      },
      expediteDock: {
        planned: '2023-07-10',
        estimated: '2023-07-10',
        actual: '2023-07-07',
        initial: '2023-07-10',
      },
      plannedDock: {
        planned: '2023-07-10',
      },
      releaseToEngineering: {
        estimated: '2023-07-12',
        initial: '2023-09-08',
      },
      expediteLive: {
        estimated: '2023-07-18',
        initial: '2023-09-14',
      },
      plannedLive: {
        planned: '2023-07-15',
        initial: '2023-09-14',
      },
      pbrDate: {
        estimated: '2023-07-04',
        actual: '2023-06-06',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 19,
      platform: 'Intel',
      platformGeneration: 'Gen8.0',
      platformGenerationGroup: 'Gen8',
      planSkuName: '19_Storage_XStore_Intel_Gen8.0_(104)_M1156387_NA',
      hasComments: false,
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'ZT',
      platformGrouping: 'Storage',
      shipApprovedDate: '2023-07-11T06:02:55.37+00:00',
      shipApprovalStatus: 'ShipApproved',
      factoryCode: 'NEW JERSEY',
      factoryLocation: 'NEW JERSEY',
      resourceType: 'Storage',
      deploymentPath: 'WHSE2PBR',
      transitDays: 1,
      pbrFulfillmentId: '5062347',
      pbrMdmStatus: 'Delivered - partially consumed',
      firstFootPrint: false,
      isShipApproved: 'Yes',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1689074475,
      _etag: '"690bea16-0000-0800-0000-64ad3b2b0000"',
    },
    {
      id: '10175193',
      mdmId: '41195087',
      region: {
        id: '62b5f647-6ec8-427a-abc4-f7f32e981eb3',
        name: 'West Europe',
        regionType: 'Hero',
        metro: 'Amsterdam',
        coordinates: [4.9041, 52.3676],
      },
      zone: {
        id: 'bd7df3e0-a82f-4e1c-8dbf-f3f5d3d9d5d5',
        name: 'AZ03',
        regionName: 'West Europe',
      },
      clusterName: 'AMS09PrdVVS02-01',
      dataCenter: 'AMS09',
      status: 'Dock',
      fulfillment: '5043278',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -194,
        status: 'red',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      priorityStack: {
        value: 11881,
        status: 'gray',
      },
      remediationCluster: false,
      reservation: {
        actual: '2022-08-19',
      },
      clearToDock: {
        actual: '2022-11-15',
      },
      coordinatedDock: {
        estimated: '2022-10-07',
      },
      expediteDock: {
        planned: '2022-09-26',
        estimated: '2022-11-21',
        actual: '2022-11-21',
        initial: '2022-11-21',
      },
      plannedDock: {
        planned: '2022-09-26',
      },
      releaseToEngineering: {
        estimated: '2023-05-10',
        initial: '2023-05-10',
      },
      expediteLive: {
        estimated: '2023-07-23',
        initial: '2023-05-10',
      },
      plannedLive: {
        planned: '2023-01-10',
        initial: '2023-05-10',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 3,
      platform: 'Intel',
      platformGeneration: 'Gen7.0',
      platformGenerationGroup: 'Gen7',
      platformMemoryType: 'BMVW-LL-T2',
      planSkuName:
        '3_AzureDedicated_VMWARE_BMVW-LL-T2_Intel_Gen7.0_104_BM VMW VS COMP2_COMP2_M1243554-001',
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'WWT',
      platformGrouping: 'Other',
      shipApprovedDate: '2023-07-11T05:47:05.89+00:00',
      jcabLastModifiedDateTime: '2022-10-24T05:34:44+00:00',
      frozenCode: 'DC',
      factoryCode: 'Amsterdam',
      factoryLocation: 'Amsterdam',
      resourceType: 'BM VMW VS COMP2',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 7,
      firstFootPrint: false,
      isShipApproved: 'Yes',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1689074596,
      _etag: '"a80b9f95-0000-0800-0000-64ad3ba40000"',
    },
    {
      id: '10214758',
      mdmId: '40255924',
      region: {
        id: '652dc5cd-7ccc-490d-85c5-2ccbff72a402',
        name: 'Central India',
        regionType: 'Hub',
        metro: 'Pune',
        coordinates: [73.85541, 18.52076],
      },
      zone: {
        id: '1a03bbb0-23bb-4e1b-971c-63f2645a5059',
        name: 'AZ01',
        regionName: 'Central India',
      },
      clusterName: 'PNQ21PrdVVS01-01',
      dataCenter: 'PNQ21',
      status: 'Reservation Underway',
      fulfillment: '5030215',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -183,
        status: 'red',
      },
      priorityCode: '21',
      priorityDescription: '21-S1 Strategic Initiative',
      priorityStack: {
        value: 3011,
        status: 'gray',
      },
      remediationCluster: false,
      clearToDock: {
        actual: '2021-12-20',
      },
      expediteDock: {
        planned: '2022-10-28',
      },
      plannedDock: {
        planned: '2022-10-28',
      },
      releaseToEngineering: {
        estimated: '2023-05-21',
        initial: '2023-05-21',
      },
      expediteLive: {
        estimated: '2023-07-30',
        initial: '2023-07-30',
      },
      plannedLive: {
        planned: '2023-01-28',
        initial: '2023-07-30',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 3,
      platform: 'Intel',
      platformGeneration: 'Gen7.0',
      platformGenerationGroup: 'Gen7',
      platformMemoryType: 'BMVW-LL-T2',
      planSkuName:
        '3_AzureDedicated_VMWARE_BMVW-LL-T2_Intel_Gen7.0_103H_BM VMW VS COMP2_COMP2_M1248371-001',
      hasComments: false,
      hasTasks: false,
      platformTier: '103H',
      oemSupplier: 'WWT',
      platformGrouping: 'Other',
      jcabRequestId: 92692,
      jcabReviewId: 'wh6wwypz:1',
      jcabIssueCode: 'Cancel PBR',
      jcabReasonCode: 'CP - Shiproom Decision',
      jcabRequestedChanges: 'forecastState',
      jcabStatus: 'AUTOVALIDATIONFAILED',
      jcabCreatedDateTime: '2023-04-06T22:07:43+00:00',
      jcabLastModifiedDateTime: '2023-04-11T10:07:51+00:00',
      jcabRequester: 'megarg@microsoft.com',
      factoryCode: 'LTC',
      factoryLocation: 'LTC',
      resourceType: 'BM VMW VS COMP2',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 21,
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: 'M 21',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1688493371,
      _etag: '"5208a2be-0000-0800-0000-64a45d3b0000"',
    },
    {
      id: '10180707',
      mdmId: '40321447',
      region: {
        id: '9a1c5e93-b12b-4e63-96e3-2655514b1a8b',
        name: 'Spain Central',
        regionType: 'Hub',
        metro: 'Madrid',
        coordinates: [-3.70035, 40.41669],
      },
      zone: {
        id: '371ec344-971c-40b7-ba7c-6cf097e0b8d1',
        name: 'AZ02',
        regionName: 'Spain Central',
      },
      dataCenter: 'MAD01',
      status: '',
      fulfillment: '5046032',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: 3,
        status: 'green',
      },
      priorityCode: '21',
      priorityDescription: '21-S1 Strategic Initiative',
      priorityStack: {
        value: 4489,
        status: 'gray',
      },
      remediationCluster: false,
      expediteDock: {
        planned: '2023-06-08',
      },
      plannedDock: {
        planned: '2023-06-08',
      },
      releaseToEngineering: {
        estimated: '2023-06-16',
        initial: '2023-05-04',
      },
      expediteLive: {
        estimated: '2023-07-07',
        initial: '2023-05-25',
      },
      plannedLive: {
        planned: '2023-07-10',
        initial: '2023-05-25',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 10,
      platform: 'Intel',
      platformGeneration: 'Gen7.3',
      platformGenerationGroup: 'Gen7',
      planSkuName: '10_Storage_XStore_Intel_Gen7.3_(103H)_M1205622_A-A',
      hasTasks: false,
      platformTier: '103H',
      oemSupplier: 'ZT',
      platformGrouping: 'Storage',
      jcabLastModifiedDateTime: '2023-03-27T13:45:50+00:00',
      frozenCode: 'AZ',
      factoryCode: 'NETHERLANDS',
      factoryLocation: 'NETHERLANDS',
      resourceType: 'Storage',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 3,
      firstFootPrint: true,
      isShipApproved: 'No',
      sevPriority: 'M 21',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1688517861,
      _etag: '"cc083ead-0000-0800-0000-64a4bce50000"',
    },
    {
      id: '10198612',
      mdmId: '43267110',
      region: {
        id: '5acb8605-765e-49af-bfb5-a592b6cfd1dc',
        name: 'Canada East',
        regionType: 'Satellite',
        metro: 'Quebec',
        coordinates: [-71.20743, 46.81418],
      },
      zone: {
        id: 'bc5915c1-67fc-499c-aca1-a896e80b9065',
        name: 'AZ01',
        regionName: 'Canada East',
      },
      clusterName: 'YQB20PrdNAP01',
      dataCenter: 'YQB20',
      status: '',
      fulfillment: '5044168',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -9,
        status: 'yellow',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      priorityStack: {
        value: 14961,
        status: 'gray',
      },
      remediationCluster: false,
      expediteDock: {
        planned: '2023-05-12',
      },
      plannedDock: {
        planned: '2023-05-12',
      },
      releaseToEngineering: {
        estimated: '2023-06-26',
        initial: '2023-06-26',
      },
      expediteLive: {
        estimated: '2023-08-25',
        initial: '2023-08-25',
      },
      plannedLive: {
        planned: '2023-08-16',
        initial: '2023-08-25',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 1,
      platform: 'Intel',
      platformGeneration: 'Gen2.6',
      platformGenerationGroup: 'Gen2',
      planSkuName: '1_NETAPP_Storage_Intel_Gen2.6_(103H)_M1241117_NA',
      hasTasks: false,
      platformTier: '103H',
      oemSupplier: 'WWT',
      platformGrouping: 'Other',
      jcabLastModifiedDateTime: '2022-12-21T06:43:10+00:00',
      frozenCode: 'DC',
      factoryCode: 'LTC',
      factoryLocation: 'LTC',
      resourceType: 'BM NetApp',
      deploymentPath: 'Bld2Ord2NonPBR',
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: 'M 99',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1687851973,
      _etag: '"87045285-0000-0800-0000-649a93c50000"',
    },
    {
      id: '10212477',
      mdmId: '66874450',
      region: {
        id: 'f88b3dd5-4c2b-4277-a556-7baf0fed9af5',
        name: 'West US 2',
        regionType: 'Hero',
        metro: 'Quincy',
        coordinates: [-119.8526, 47.2343],
      },
      zone: {
        id: 'e03823b7-7d25-4770-bd75-a63945e5a832',
        name: 'AZ01',
        regionName: 'West US 2',
      },
      clusterName: 'COZ01P',
      dataCenter: 'CO6',
      status: 'Reserved',
      fulfillment: '5059676',
      fulfillmentType: 'PBR',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -2,
        status: 'green',
      },
      priorityCode: '11',
      priorityDescription: '11-H1 Top Priority Hot',
      remediationCluster: false,
      finishedGoods: {
        estimated: '2023-01-23',
        actual: '2023-01-23',
        initial: '2023-01-23',
      },
      reservation: {
        actual: '2023-04-06',
      },
      clearToDock: {
        estimated: '2023-04-14',
        initial: '2023-04-13',
      },
      coordinatedDock: {
        estimated: '2023-04-14',
      },
      expediteDock: {
        planned: '2023-07-06',
        estimated: '2023-04-14',
        initial: '2023-04-14',
      },
      plannedDock: {
        planned: '2023-07-06',
      },
      releaseToEngineering: {
        estimated: '2023-04-16',
        initial: '2023-06-09',
      },
      expediteLive: {
        estimated: '2023-04-18',
        initial: '2023-06-11',
      },
      plannedLive: {
        planned: '2023-04-16',
        initial: '2023-06-11',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 10,
      platform: 'AMD',
      platformGeneration: 'Gen8.2',
      platformGenerationGroup: 'Gen8',
      platformMemoryType: 'GP-HH',
      planSkuName:
        '10_Azure_Compute_GP-HH_AMD_Gen8.2_104_Compute_NA_M1217727-001',
      hasComments: false,
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'INGRASYS',
      platformGrouping: 'Compute AMD',
      factoryCode: 'FMX',
      factoryLocation: 'FMX',
      resourceType: 'Compute',
      deploymentPath: 'WHSE2PBR',
      transitDays: 3,
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1688138403,
      _etag: '"57073928-0000-0800-0000-649ef2a30000"',
    },
    {
      id: '10214120',
      mdmId: '66874456',
      region: {
        id: 'f88b3dd5-4c2b-4277-a556-7baf0fed9af5',
        name: 'West US 2',
        regionType: 'Hero',
        metro: 'Quincy',
        coordinates: [-119.8526, 47.2343],
      },
      zone: {
        id: 'bf30a3ad-ccd1-4712-8253-a3039948d043',
        name: 'AZ03',
        regionName: 'West US 2',
      },
      clusterName: 'MWH03P',
      dataCenter: 'MWH05',
      status: 'Reserved',
      fulfillment: '5060376',
      fulfillmentType: 'PBR',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -7,
        status: 'green',
      },
      priorityCode: '11',
      priorityDescription: '11-H1 Top Priority Hot',
      remediationCluster: false,
      finishedGoods: {
        estimated: '2023-01-19',
        actual: '2023-01-19',
        initial: '2023-01-19',
      },
      reservation: {
        actual: '2023-04-06',
      },
      clearToDock: {
        estimated: '2023-04-12',
        initial: '2023-04-13',
      },
      coordinatedDock: {
        estimated: '2023-04-12',
      },
      expediteDock: {
        planned: '2023-04-12',
        estimated: '2023-04-12',
        initial: '2023-04-12',
      },
      plannedDock: {
        planned: '2023-04-12',
      },
      releaseToEngineering: {
        estimated: '2023-04-14',
        initial: '2023-07-08',
      },
      expediteLive: {
        estimated: '2023-04-16',
        initial: '2023-07-10',
      },
      plannedLive: {
        planned: '2023-04-09',
        initial: '2023-07-10',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 10,
      platform: 'AMD',
      platformGeneration: 'Gen8.2',
      platformGenerationGroup: 'Gen8',
      platformMemoryType: 'GP-HH',
      planSkuName:
        '10_Azure_Compute_GP-HH_AMD_Gen8.2_104_Compute_NA_M1217727-001',
      hasComments: false,
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'QUANTA',
      platformGrouping: 'Compute AMD',
      jcabRequestId: 92825,
      jcabReviewId: 'rbzxky1p:1',
      jcabIssueCode: 'ETA Push-out',
      jcabReasonCode: 'Procurement - PO Issue  ',
      jcabRequestedChanges: 'dockDate;requestedDockDate',
      jcabStatus: 'PENDING APPROVAL',
      jcabCreatedDateTime: '2023-04-10T15:17:06+00:00',
      jcabLastModifiedDateTime: '2023-04-10T15:17:11+00:00',
      jcabRequester: 'v-tptacek@microsoft.com',
      factoryCode: 'QMF',
      factoryLocation: 'QMF',
      resourceType: 'Compute',
      deploymentPath: 'WHSE2PBR',
      transitDays: 2,
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1688138404,
      _etag: '"57079c28-0000-0800-0000-649ef2a40000"',
    },
    {
      id: '10214580',
      mdmId: '78763889',
      region: {
        id: '768b7b7b-33a9-48cf-bc1e-00a62d0c792d',
        name: 'West US',
        regionType: 'Hub',
        metro: 'San Jose',
        coordinates: [-121.88814, 37.33479],
      },
      zone: {
        id: '8d47ff01-db8d-4ca5-9d1f-a6c640822fba',
        name: 'AZ03',
        regionName: 'West US',
      },
      clusterName: 'SJC22PrdBMOVX03',
      dataCenter: 'SJC22',
      status: 'Dock',
      fulfillment: '5060594',
      fulfillmentType: 'ManualPreRackThirdPartyNetwork',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -145,
        status: 'red',
      },
      priorityCode: '11',
      priorityDescription: '11-H1 Top Priority Hot',
      remediationCluster: false,
      reservation: {
        actual: '2023-04-21',
      },
      clearToDock: {
        actual: '2023-05-26',
        initial: '2023-05-16',
      },
      coordinatedDock: {
        estimated: '2023-06-09',
      },
      expediteDock: {
        planned: '2023-05-12',
        estimated: '2023-05-15',
        actual: '2023-05-15',
        initial: '2023-05-15',
      },
      plannedDock: {
        planned: '2023-05-12',
      },
      releaseToEngineering: {
        estimated: '2023-08-02',
        initial: '2023-09-09',
      },
      expediteLive: {
        estimated: '2023-10-11',
        initial: '2023-11-18',
      },
      plannedLive: {
        planned: '2023-05-19',
        initial: '2023-11-18',
      },
      isLive: false,
      intent: 'Pilot-Prod',
      quantity: 15,
      platform: 'Intel',
      platformGeneration: 'Gen8.0',
      platformGenerationGroup: 'Gen8',
      planSkuName:
        '15_AzureDedicated_BareMetal_GPU-L40_Intel_Gen8.0_104_BMOVXL40GPU_NA_M1276777-001',
      hasComments: false,
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'LENOVO',
      shipApprovedDate: '2023-07-11T06:01:21.57+00:00',
      jcabLastModifiedDateTime: '2023-05-09T17:14:59+00:00',
      frozenCode: 'DC',
      factoryCode: 'MTY',
      factoryLocation: 'MTY',
      resourceType: 'BMOVXL40GPU',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 3,
      firstFootPrint: false,
      isShipApproved: 'Yes',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1689074678,
      _etag: '"750a225b-0000-0800-0000-64ad3bf60000"',
    },
    {
      id: '10175206',
      mdmId: '41196697',
      region: {
        id: '62b5f647-6ec8-427a-abc4-f7f32e981eb3',
        name: 'West Europe',
        regionType: 'Hero',
        metro: 'Amsterdam',
        coordinates: [4.9041, 52.3676],
      },
      zone: {
        id: 'bd7df3e0-a82f-4e1c-8dbf-f3f5d3d9d5d5',
        name: 'AZ03',
        regionName: 'West Europe',
      },
      clusterName: 'AMS09PrdVVS02-01',
      dataCenter: 'AMS09',
      status: 'Dock',
      fulfillment: '5043278',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -194,
        status: 'red',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      priorityStack: {
        value: 11896,
        status: 'gray',
      },
      remediationCluster: false,
      reservation: {
        actual: '2022-08-19',
      },
      clearToDock: {
        actual: '2022-11-15',
      },
      coordinatedDock: {
        estimated: '2022-10-07',
      },
      expediteDock: {
        planned: '2022-09-26',
        estimated: '2022-11-21',
        actual: '2022-11-21',
        initial: '2022-11-21',
      },
      plannedDock: {
        planned: '2022-09-26',
      },
      releaseToEngineering: {
        estimated: '2023-05-10',
        initial: '2023-05-10',
      },
      expediteLive: {
        estimated: '2023-07-23',
        initial: '2023-05-10',
      },
      plannedLive: {
        planned: '2023-01-10',
        initial: '2023-05-10',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 15,
      platform: 'Intel',
      platformGeneration: 'Gen7.0',
      platformGenerationGroup: 'Gen7',
      platformMemoryType: 'BMVW-LL-T1',
      planSkuName:
        '15_AzureDedicated_VMWARE_BMVW-LL-T1_Intel_Gen7.0_104_BM VMW VS COMP1_COMP1_M1243551-001',
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'WWT',
      platformGrouping: 'Other',
      shipApprovedDate: '2023-07-11T05:47:05.89+00:00',
      jcabLastModifiedDateTime: '2022-10-24T05:34:44+00:00',
      frozenCode: 'DC',
      factoryCode: 'Amsterdam',
      factoryLocation: 'Amsterdam',
      resourceType: 'BM VMW VS COMP1',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 7,
      firstFootPrint: false,
      isShipApproved: 'Yes',
      sevPriority: '4',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1689074812,
      _etag: '"e407c28a-0000-0800-0000-64ad3c7c0000"',
    },
    {
      id: '10180681',
      mdmId: '40321455',
      region: {
        id: '9a1c5e93-b12b-4e63-96e3-2655514b1a8b',
        name: 'Spain Central',
        regionType: 'Hub',
        metro: 'Madrid',
        coordinates: [-3.70035, 40.41669],
      },
      zone: {
        id: '85c99083-57bb-43b3-b5c1-b54e9a6b9802',
        name: 'AZ03',
        regionName: 'Spain Central',
      },
      dataCenter: 'MAD21',
      status: 'Reservation Underway',
      fulfillment: '5046006',
      fulfillmentType: 'BTO',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -38,
        status: 'red',
      },
      priorityCode: '21',
      priorityDescription: '21-S1 Strategic Initiative',
      priorityStack: {
        value: 4485,
        status: 'gray',
      },
      remediationCluster: false,
      expediteDock: {
        planned: '2023-05-31',
      },
      plannedDock: {
        planned: '2023-05-31',
      },
      releaseToEngineering: {
        estimated: '2023-07-06',
        initial: '2023-04-05',
      },
      expediteLive: {
        estimated: '2023-07-27',
        initial: '2023-04-26',
      },
      plannedLive: {
        planned: '2023-06-19',
        initial: '2023-04-26',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 10,
      platform: 'Intel',
      platformGeneration: 'Gen7.3',
      platformGenerationGroup: 'Gen7',
      planSkuName: '10_Storage_XStore_Intel_Gen7.3_(103H)_M1205622_A-A',
      hasTasks: false,
      platformTier: '103H',
      oemSupplier: 'ZT',
      platformGrouping: 'Storage',
      frozenCode: 'AZ',
      factoryCode: 'NETHERLANDS',
      factoryLocation: 'NETHERLANDS',
      resourceType: 'Storage',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 7,
      firstFootPrint: true,
      isShipApproved: 'No',
      sevPriority: 'M 21',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1687851956,
      _etag: '"2d021521-0000-0800-0000-649a93b40000"',
    },
    {
      id: '10205253',
      mdmId: '66830555',
      region: {
        id: '205383b7-0605-46a1-9588-1e290d182bc2',
        name: 'East US 2',
        regionType: 'Hero',
        metro: 'Boydton',
        coordinates: [-78.39007, 36.66742],
      },
      zone: {
        id: '79abd47b-33ed-4316-a96c-3d017764ec27',
        name: 'AZ01',
        regionName: 'East US 2',
      },
      dataCenter: 'MIA30',
      status: '',
      fulfillment: '5057328',
      fulfillmentType: 'EdgeZonePreRack',
      severity: {
        value: 4,
        status: 'gray',
      },
      delta: {
        value: -42,
        status: 'red',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      remediationCluster: false,
      expediteDock: {
        planned: '2023-05-01',
      },
      plannedDock: {
        planned: '2023-05-01',
      },
      releaseToEngineering: {
        estimated: '2023-06-19',
        initial: '2023-06-19',
      },
      expediteLive: {
        estimated: '2023-08-28',
        initial: '2023-08-28',
      },
      plannedLive: {
        planned: '2023-07-17',
        initial: '2023-08-28',
      },
      isLive: false,
      intent: 'Growth',
      quantity: 4,
      platform: 'Intel',
      platformGeneration: 'Gen7.5',
      platformGenerationGroup: 'Gen7',
      planSkuName:
        '4_AzureEZ_Compute_GP-Med_Intel_Gen7.5_104_MECCompute_NA_M1192819-001',
      hasComments: false,
      hasTasks: false,
      platformTier: '104',
      oemSupplier: 'LENOVO',
      frozenCode: 'DC',
      resourceType: 'MECCompute',
      deploymentPath: 'Bld2Ord2NonPBR',
      transitDays: 3,
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: 'M 99',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1687852078,
      _etag: '"2d028449-0000-0800-0000-649a942e0000"',
    },
    {
      id: '10214923',
      mdmId: '71999448',
      region: {
        id: '7950bf96-ab5d-459d-9e0f-eece084eaf13',
        name: 'North Central US',
        regionType: 'Hub',
        metro: 'Chicago',
        coordinates: [-87.6324, 41.88323],
      },
      zone: {
        id: 'c89bfbb0-d8ef-47ec-a8d2-b7a2b7165530',
        name: 'AZ02',
        regionName: 'North Central US',
      },
      clusterName: 'CHI25PrdIBMP01',
      dataCenter: 'CHI25',
      status: '',
      fulfillment: '5060754',
      delta: {
        value: -54,
        status: 'red',
      },
      priorityCode: '99',
      priorityDescription: '99-ZZ No Priority',
      remediationCluster: false,
      expediteDock: {
        planned: '2023-03-01',
      },
      plannedDock: {
        planned: '2023-03-01',
      },
      releaseToEngineering: {
        estimated: '2023-04-15',
        initial: '2023-04-15',
      },
      expediteLive: {
        estimated: '2023-06-24',
        initial: '2023-06-24',
      },
      plannedLive: {
        planned: '2023-05-01',
        initial: '2023-06-24',
      },
      isLive: false,
      intent: 'Pilot-Eng',
      quantity: 2,
      platform: 'NA',
      platformGeneration: 'Gen1.1',
      platformGenerationGroup: 'Gen1',
      planSkuName:
        '2_AzureDedicated_IPLI_Compute-SUP_NA_Gen1.1_106_IBM-Power_NA_M1272822-001',
      hasComments: false,
      hasTasks: false,
      platformTier: '106',
      oemSupplier: 'IBM',
      resourceType: 'IBM-Power',
      deploymentPath: 'N/A',
      transitDays: 7,
      firstFootPrint: false,
      isShipApproved: 'No',
      sevPriority: 'M 99',
      deploymentStrategy: 0,
      gpu: 0,
      gpuA100: 0,
      isFirstFootprint: false,
      racks: 0,
      sev: 0,
      skuGen: 0,
      tMinusWeeks: 0,
      _ts: 1687852087,
      _etag: '"2d02504c-0000-0800-0000-649a94370000"',
    },
  ];

  const orders: Order[] = [
    {
      finishGoods: '2023-09-01',
      clearToDock: '2023-07-15',
      someProperty: 'ABC',
      anotherProperty: 20,
    },
    {
      finishGoods: '2023-08-25',
      clearToDock: '2023-07-10',
      someProperty: 'XYZ',
      anotherProperty: 5,
    },
    {
      finishGoods: '2022-09-10',
      clearToDock: '2022-07-20',
      someProperty: 'PQR',
      anotherProperty: 15,
    },
  ];

  function validateOrder(query: string, o: Order): boolean | string {
    // Evaluate the query condition dynamically

    // Check if the condition is true for the given order
    if (o.anotherProperty < 10) {
      return query.replace(/"checkData"/g, "false");
    }

    if (o.anotherProperty > 15 && o.anotherProperty < 22) {
      return query.replace(/"checkData"/g, "true");
    }


    return query;
  }

  const queries = [
    '(o.finishGoods > "2023-08-23" && (o.clearToDock > "2023-07-09"))',
    '(o.someProperty == "PQR")'
  ];

  const validateOrderQueries = (o) => {

      return [
        '(((o.finishGoods > "2023-08-23") && true) && ((o.clearToDock > "2023-07-09") && true))',
      ];
    
  };
  
  const filteredOrders = Enumerable.from(orders)
    .where((o) => {
      const queries = validateOrderQueries(o);
      const parsedQueries = queries.map(query => new Function('o', `return ${query};`));
      const combinedQuery = parsedQueries.some(query => query(o));
      return combinedQuery;
    })
    .toArray();
  
  // const parsedQueries = queries.map(query => new Function('o', `return ${query};`));
  
  // const combinedQuery = o => parsedQueries.every(query => query(o));
  
  // const filteredOrders = Enumerable.from(orders)
  //   .where(combinedQuery)
  //   .toArray();
  
  // const validateOrderQueries = (o) => {
  //     return [
  //       '(o.finishGoods > "2023-08-23" && (o.clearToDock > "2023-07-09"))',
  //       '((o.clearToDock > "2023-07-09") || o.someProperty == "PQR")'
  //     ];
    
  // };
  
  // const parsedQueries = orders.map(order => validateOrderQueries(order).map(query => new Function('o', `return ${query};`)));
  
  // const combinedQuery = (o, i) => parsedQueries[i].every(query => query(o));
  
  // const filteredOrders = Enumerable.from(orders)
  //   .where(combinedQuery)
  //   .toArray();
  

  return (
    <div>
      <div>
        <h1>Where</h1>
        <div className="ag-theme-balham"></div>
        <div style={{ marginTop: '30px' }}>
          <ReactJson src={filteredOrders} />
        </div>
      </div>
    </div>
  );
}
