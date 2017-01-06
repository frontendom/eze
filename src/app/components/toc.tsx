import * as types from '../../types';
import * as React from 'react';
import * as txt from './txt';
import * as gls from './gls';
import { style, classes } from 'typestyle';
import * as csstips from 'csstips';
import { colors } from '../../internal/styles';

namespace TocStyles {
  export const tocAnchorClass = style(
    csstips.padding(5, 5, 5, 10),
    {
      color: colors.text,
      textDecoration: 'none',
      $nest: {
        '&:hover': {
          color: colors.text,
          background: '#ddd',
        }
      }
    }
  );

  export const marginLeft = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
    return {
      marginLeft: (level * 10) + 'px'
    };
  }
}

const renderTocEntry = (t: types.TableOfContentEntry) => [<a key={t.level + t.id} className={classes(
  TocStyles.tocAnchorClass,
)} style={TocStyles.marginLeft(t.level)} href={"#" + t.id} onClick={() => {
  if (t.iframeId) {
    const child = document.getElementById(t.iframeId) as HTMLIFrameElement;
    if (child) {
      /** Scroll to iframe */
      window.scrollTo(0, child.offsetTop)

      /** Also request sub item scroll */
      const p2cScroll: types.IframeP2CScroll = {
        type: 'IframeP2CScroll',
        id: t.id
      };
      child.contentWindow.postMessage(p2cScroll, '*');
    }
  }
}}>
  {t.text}
</a>].concat(t.subItems.map(renderTocEntry));

export const Toc = ({ toc }: { toc: types.TableOfContentEntry[] }) => <gls.ContentVerticalContentMargined>
  <txt.H1 id={'toc'}>Table of Contents</txt.H1>
  <gls.ContentVertical>
    {
      toc.map((t) => {
        return renderTocEntry(t)
      })
    }
  </gls.ContentVertical>
</gls.ContentVerticalContentMargined>;


/**
 * Scroll handling for iframes
 * http://stackoverflow.com/a/19503982/390330
 */
window.addEventListener('message', (e) => {
  const data: types.IframeC2PMessage = e.data;

  if (data.type === 'IframeC2PScrollMore') {
    window.scrollTo(0, window.scrollY + data.more);
  }
});