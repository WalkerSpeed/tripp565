export default(()=>{
  
document.addEventListener('gameStart',e=>{
  /**/ 
CS1.myPlayer.setAttribute('energyUsage','');
 /**/ 
  function onWinsRetrieved(value){
    CS1.stats.winDial.setValue(value);
  }
  
  CS1.db.get( 'wins' , onWinsRetrieved);
 /**/ 
CS1.myPlayer.setAttribute('jump','')
 /**/     
}); 
  document.addEventListener('keydown',e=>{
    
    if(e.code=='ShiftLeft'){
     CS1.myPlayer.components.player.setSpeed(0.5);
    } 
});
  document.addEventListener('keyup',e=>{
    
    if(e.code=='ShiftLeft'){
     CS1.myPlayer.components.player.setSpeed(0.2);
    } 
});
  /**/ 
  AFRAME.registerComponent('energyUsage', {
    
    
    schema: {},

    init: function(){},
    
    tick: function(t, dt){
      
      if(CS1.myPlayer.components["movement-controls"].data.speed >= 0.20001){
         
      if(CS1.stats.energyDial.value>=2){
      CS1.stats.energyDial.setValue(CS1.stats.energyDial.value-2);
      }
      if(CS1.stats.energyDial.value<=1)           	{CS1.myPlayer.components.player.setSpeed(0.20001)}
         }else{
         
      if(CS1.stats.energyDial.value<=999){  
      CS1.stats.energyDial.setValue(CS1.stats.energyDial.value+1);
      }     
         }
      
    },
    
    
  });
  /**/ 
  
  
  
  
  
 /* >this is old, but dont remove<
 AFRAME.registerComponent('sprint', {
    
    
    schema: {
    },

    init: function(){
    document.addEventListener('keydown',e=>{
       if(e.code=='ShiftLeft'){
       
       if(CS1.stats.energyDial.value<=1000){
       CS1.stats.energyDial.changeBy(0.2);
       }
         
       }
    });
    },
    
    tick: function(t, dt){
      
      if(e==1){
   if(CS1.stats.energyDial>=1){
    CS1.myPlayer.components.player.setSpeed(0.5);
        
      }
      else{CS1.myPlayer.components.player.setSpeed(0.2);}
    
    CS1.stats.energyDial.changeBy(-1);
    }
    else{
      CS1.myPlayer.components.player.setSpeed(0.2);
      if(CS1.stats.energyDial<=999){
      CS1.stats.EnergyDial.changeBy(1)}} 
      
    },
    
    
  });
  
  document.addEventListener('keydown',e=>{
    
    if(e.code=='ShiftLeft'){
   if(CS1.stats.energyDial>=1){
    CS1.myPlayer.components.player.setSpeed(0.5);
        
      }
      else{CS1.myPlayer.components.player.setSpeed(0.2);}
    
    CS1.stats.energyDial.setValue(CS1.stats.energyDial.value-1);
    }
    else{
      CS1.myPlayer.components.player.setSpeed(0.2);
      if(CS1.stats.energyDial<=999){
      CS1.stats.energyDial.setValue(CS1.stats.energyDial.value+1);
      }} 
    
  });
  */
})()