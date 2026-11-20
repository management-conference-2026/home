export type Session = { id: string; start: string; end: string; title: string; kind: 'keynote'|'panel'|'interactive'|'networking'|'break'|'qa'; people?: string[]; organization?: string; description?: string; tentative?: boolean };
export const agenda: Session[] = [
 {id:'opening',start:'09:00',end:'09:30',title:'Opening speech',kind:'keynote',description:'Four strategic priorities, Ambitions, destinations',people:['Ibrahim Canliel, Chief Executive Officer']},
 {id:'network-distribution',start:'09:30',end:'10:00',title:'Network and Distribution',kind:'keynote',people:['Yerbolat Baisalykov, Senior Vice President Revenue Management and Commercial Planning']},
 {id:'brand',start:'10:00',end:'10:30',title:'Brand Awareness, Global Visibility',kind:'keynote',people:['Bella Tormysheva, Vice President Corporate Communications','Yuliya Tsoy, Director Marketing']},
 {id:'coffee-am',start:'10:30',end:'11:15',title:'Coffee break & Network time',kind:'break'},
 {id:'panel-cx',start:'11:15',end:'12:15',title:'#1 Panel discussion on Customer Experience',kind:'panel',people:['Moderator: Sandra Cullen, Vice President Training and Customer Experience','Johan Eidhagen, President and Chief Executive Officer, FlyArystan','Yelena Obukhova, Vice President Inflight Services','Alexandr Neboga, Vice President Ground Services','Serik Rys-Uly, Vice President Marketing and Sales']},
 {id:'qa-1',start:'12:15',end:'12:30',title:'Q&A',kind:'qa'},
 {id:'lunch',start:'12:30',end:'14:00',title:'Network Lunch and AI Vernissage',kind:'networking'},
 {id:'kahoot',start:'14:00',end:'14:20',title:'Kahoot quiz',kind:'interactive'},
 {id:'panel-people',start:'14:15',end:'15:15',title:'#2 Panel discussion on People, Culture and Capabilities',kind:'panel',people:['Moderator: Yevgeniya Ni, Chief Human Resources Officer','Filippos Siakkas, Chief Operating Officer','Keith Wardle, Vice President Engineering and Maintenance','Piyush Taori, Chief Digital and Information Officer','Gerhard Coetzee, Chief Safety Compliance Officer']},
 {id:'qa-2',start:'15:15',end:'15:30',title:'Q&A',kind:'qa'},
 {id:'coffee-pm',start:'15:30',end:'16:00',title:'Coffee break',kind:'break'},
 {id:'workshop',start:'16:00',end:'16:40',title:'Interactive workshop on communication',kind:'interactive',people:['Andy Holt, Managing Partner of Internal Communications and Experience','Damon Bowles, Head of Strategic Internal Communications and Content'],organization:'Definition Group'},
 {id:'efficiency',start:'16:40',end:'17:10',title:'Efficiency',kind:'keynote',people:['Goncalo Pires, Chief Financial Officer']},
 {id:'qa-3',start:'17:10',end:'17:40',title:'Q&A session',kind:'qa'},
 {id:'closing',start:'17:40',end:'17:50',title:'Closing speech',kind:'keynote',people:['Ibrahim Canliel, Chief Executive Officer']},
];
