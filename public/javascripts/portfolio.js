var current_work = "CheckIt";
var last_active = 0;

function portfolio_image(index){
    if (current_work === "CheckIt"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/checkit/uno.png");
        if (index === 1) $('.cornice > img').attr("src","/images/work/checkit/due.png");
        if (index === 2) $('.cornice > img').attr("src","/images/work/checkit/tre.png");
    }else if (current_work === "Wemobi"){
        if (index === 0) $('.cornice > img').attr("src","/images/work/wemobi/uno.png");
        if (index === 1) $('.cornice > img').attr("src","/images/work/wemobi/due.png");
        if (index === 2) $('.cornice > img').attr("src","/images/work/wemobi/tre.png");
    }
    
    $('.indicator > a:eq('+last_active+') > span').removeClass('active');
    $('.indicator > a:eq('+index+') > span').addClass('active');
    last_active = index;
}

function change_work(work){
    if (current_work === work) return "";
    
    current_work = work;
    
    $('#wemobi_div').removeClass("selected");
    $('#checkit_div').removeClass("selected");
    
    if (work === "Wemobi") $('#wemobi_div').addClass("selected");
    else if (work === "CheckIt") $('#checkit_div').addClass("selected");
    
    portfolio_image(0);
    
    $('#title_work').html(getTitle(work));
    $('#commitment').html(getCommitment(work));
}

function getTitle(work){
    if (work === "CheckIt") return "CheckIt!";
    else if (work === "Wemobi") return "Wemobi";
    else return "";
}

function getCommitment(work){
    if (work === "CheckIt") return "Myself";
    else if (work === "Wemobi") return "<a href='http://www.mavigex.com' target='_blank'>Mavigex S.r.l.</a>";
    else return "";
}