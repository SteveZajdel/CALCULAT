$(document).ready(function(){
	$memo=0;
	$txt="";
	$ope=false;
	$numb=true;
	$oper="";
	$vala="";
	$num="";
	$num_array=[];
	$ope_array=[];
	$bloq_point=false;
		$("input").click(function(){
		$vala=$(this).val();
		$cls=$(this).attr('class');
		$("#DIZE").removeClass("erreur").html("");
	/*	logvar("avant");
		if ($vala=="raz")
		{
			$memo=0;
			$txt="";
			$ope=false;
			$numb=true;
			$oper="";
			$vala="";
			$num_array=[];
			$ope_array=[];
			$bloq_point=false;
			$("#calcul").html("");
			$("#resultat").html("");
			logvar("apres");
		}
		else if ($numb && $cls=="nmb" && $oper != "/" )
		{*/
			$txt+=$vala;
			$("#calcul").html($txt);
			$num+=$vala;
			if ($vala==".")
			{
				$("#point").attr('hidden',true);
			}
	/*		$ope=true;
	 		$numb=false;
			if ($oper!="") 
			{
				switch($oper)
				{
					case "+":
						$memo+=Number($vala);
						break;
					case "-":
						$memo-=Number($vala);
						break;
					case "*":
						$memo*=Number($vala);
				}
				logvar("apres");
			}
			else 
			{
				$memo=Number($vala);
				$ope=true;
				$numb=false;
				logvar("apres");
			}
		}
		else if ($numb && $oper=="/" && $cls=="nmb") 
		{
			if (Number($vala)==0) 
			{
				$("#DIZE").addClass("erreur").html("DIVISION PAR ZERO");
			}
			else
			{
 				$txt+=$vala;
				$("#calcul").html($txt);
 				$ope=true;
				$numb=false;
 				$memo/=Number($vala);
 				logvar("apres");
  			}
  
  		}
		else if ($ope && $cls=="ope")
		{
			if ($vala!="=")
			{
				$txt+=$vala;
				$("#calcul").html($txt);
				$numb=true;
				$ope=false;
				$oper=$vala;
				logvar("apres");
			}
			else
			{
			$("#resultat").html($memo);
			}
		};
	});
	
	function logvar(etape) 
	{
		if (etape=="avant")
		{
			$("#variables").html("\<hr\>"+etape+"\<hr\>$memo="+$memo+"\<br\>"+"$numb="+$numb+"\<br\>"+"$ope="+$ope+"\<br\>"+"$oper="+$oper+"\<br\>"+"$vala="+$vala+"\<br\>"+"$cls="+$cls);
		}
		else
		{*/
		//	$("#var").html("\<hr\>"+etape+"\<hr\>$memo="+$memo+"\<br\>"+"$numb="+$numb+"\<br\>"+"$ope="+$ope+"\<br\>"+"$oper="+$oper+"\<br\>"+"$vala="+$vala+"\<br\>"+"$cls="+$cls);
		$("#var").html($num);
		$("#var").html(Number($num));
	//	}
	});
});