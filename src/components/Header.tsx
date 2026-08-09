import { useState } from 'react';
import { navigation } from '../constants/navigation';
import { PROFILE } from '../constants/profile';
import Icon from './Icon';
interface Props { onNavigate: (target: string) => void }
export default function Header({ onNavigate }: Props) { const [open,setOpen]=useState(false); const go=(target:string)=>{onNavigate(target);setOpen(false)}; return <><header><button className="brand" onClick={()=>go('top')}><i>TL</i><span>Tokoloho<br/>Lekoro</span></button><nav>{navigation.map(item=><button key={item} onClick={()=>go(item)}>{item}</button>)}</nav><a className="navmail" href={`mailto:${PROFILE.email}`}><Icon name="mail"/> Let’s talk</a><button className="menubtn" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}><Icon name={open?'close':'menu'} size={22}/></button></header><div className={`mobile-nav ${open?'show':''}`}>{navigation.map(item=><button key={item} onClick={()=>go(item)}>{item}</button>)}<a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div></>; }
