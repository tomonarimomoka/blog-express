import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export default function Page() {

    return(
        <>  
            <SubTitle subTitle="♥はじめてシリーズの記事一覧"/>
            <FlexBox>
                <ArticleCard title="はじめてのGit"  component="git-for-beginner" > 初めてGitを使う人に向けた記事です。とりあえず使いたい！という人に向けた簡潔で実践的な内容です</ArticleCard> 
                <ArticleCard title="はじめてのStreamlit"  component="how-to-use-streamlit" > PythonのフレームワークであるStreamlitを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="はじめてのvim"  component="vim-for-beginner" > vimを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="はじめての転職"  component="first-career-change" > はじめての転職についての記事です。具体的な転職時のすっぺくなども公開！</ArticleCard>
                <ArticleCard title="はじめてのLinux" component="first-linux" >Linuxを使い始めるときに、初めに覚えるべきコマンドを紹介！用途別に紹介しているためコマンドを全く知らなくても、調べやすいはずです。</ArticleCard>
                <ArticleCard title="はじめてのPC交換"  component="first-pc-change" > エンジニアがPCを交換するときにやるべきことをまとめました。私用PCの交換は面倒なことがたくさんありますが、この記事を読めば次交換するときには手間が減る工夫も分かります！！</ArticleCard>
            </FlexBox>
        </>
    )
}