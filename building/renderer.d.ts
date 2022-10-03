import * as React from 'react'
import { ExtendedRecordMap } from 'notion-types'
import {
  MapPageUrlFn,
  MapImageUrlFn,
  SearchNotionFn,
  NotionComponents
} from './types'
export declare const NotionRenderer: React.FC<{
  recordMap: ExtendedRecordMap
  components?: Partial<NotionComponents>
  mapPageUrl?: MapPageUrlFn
  mapImageUrl?: MapImageUrlFn
  searchNotion?: SearchNotionFn
  rootPageId?: string
  rootDomain?: string
  fullPage?: boolean
  darkMode?: boolean
  previewImages?: boolean
  forceCustomImages?: boolean
  showCollectionViewDropdown?: boolean
  linkTableTitleProperties?: boolean
  isImageZoomable?: boolean
  showTableOfContents?: boolean
  minTableOfContentsItems?: number
  defaultPageIcon?: string
  defaultPageCover?: string
  defaultPageCoverPosition?: number
  className?: string
  bodyClassName?: string
  frameClassName?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  pageHeader?: React.ReactNode
  pageFooter?: React.ReactNode
  pageTitle?: React.ReactNode
  pageAside?: React.ReactNode
  pageCover?: React.ReactNode
  blockId?: string
  hideBlockId?: boolean
  disableHeader?: boolean
}>
export declare const NotionBlockRenderer: React.FC<{
  className?: string
  bodyClassName?: string
  frameClassName?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  disableHeader?: boolean
  blockId?: string
  hideBlockId?: boolean
  level?: number
}>
//# sourceMappingURL=renderer.d.ts.map
